import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Point = {
  id: string;
  section_id: string;
  content: string;
  point_order: number;
};

type Section = {
  id: string;
  program_id: string;
  section_title: string;
  section_order: number;
  points: Point[];
};

type Program = {
  id: string;
  title: string;
  description: string;
  sections: Section[];
};

export default function ProgramDashboard() {
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [editingPoint, setEditingPoint] = useState<Point | null>(null);
  const [newSection, setNewSection] = useState({ section_title: "" });
  const [newPoint, setNewPoint] = useState({ content: "", section_id: "" });

  useEffect(() => {
    fetchProgramDetails();
  }, []);

  const fetchProgramDetails = async () => {
    const { data: programData, error: programError } = await supabase
      .from("program_details")
      .select()
      .single();

    if (programError) {
      console.error("Error fetching program details:", programError);
      setLoading(false);
      return;
    }

    const { data: sectionsData, error: sectionsError } = await supabase
      .from("program_sections")
      .select()
      .eq("program_id", programData.id)
      .order("section_order");

    if (sectionsError) {
      console.error("Error fetching sections:", sectionsError);
      setLoading(false);
      return;
    }

    const { data: pointsData, error: pointsError } = await supabase
      .from("program_points")
      .select();

    if (pointsError) {
      console.error("Error fetching points:", pointsError);
      setLoading(false);
      return;
    }

    const programDetails = {
      ...programData,
      sections: sectionsData.map((section) => ({
        ...section,
        points: pointsData
          .filter((point) => point.section_id === section.id)
          .sort((a, b) => a.point_order - b.point_order),
      })),
    };

    setProgram(programDetails as Program);
    setLoading(false);
  };

  const handleUpdateProgram = async () => {
    if (!program) return;
    const { error } = await supabase
      .from("program_details")
      .update({ title: program.title, description: program.description })
      .eq("id", program.id);

    if (error) console.error("Error updating program:", error);
    else fetchProgramDetails();
  };

  const handleAddSection = async () => {
    if (!program) return;
    const { error } = await supabase.from("program_sections").insert([
      {
        program_id: program.id,
        section_title: newSection.section_title,
        section_order: program.sections.length + 1,
      },
    ]);
    if (error) console.error("Error adding section:", error);
    else {
      setNewSection({ section_title: "" });
      fetchProgramDetails();
    }
  };

  const handleUpdateSection = async () => {
    if (!editingSection) return;
    const { error } = await supabase
      .from("program_sections")
      .update({ section_title: editingSection.section_title })
      .eq("id", editingSection.id);

    if (error) console.error("Error updating section:", error);
    else {
      setEditingSection(null);
      fetchProgramDetails();
    }
  };

  const handleDeleteSection = async (id: string) => {
    const { error } = await supabase
      .from("program_sections")
      .delete()
      .eq("id", id);
    if (error) console.error("Error deleting section:", error);
    else fetchProgramDetails();
  };

  const handleAddPoint = async () => {
    const { error } = await supabase.from("program_points").insert([
      {
        section_id: newPoint.section_id,
        content: newPoint.content,
        point_order:
          program?.sections.find((s) => s.id === newPoint.section_id)?.points
            .length + 1,
      },
    ]);
    if (error) console.error("Error adding point:", error);
    else {
      setNewPoint({ content: "", section_id: "" });
      fetchProgramDetails();
    }
  };

  const handleUpdatePoint = async () => {
    if (!editingPoint) return;
    const { error } = await supabase
      .from("program_points")
      .update({ content: editingPoint.content })
      .eq("id", editingPoint.id);

    if (error) console.error("Error updating point:", error);
    else {
      setEditingPoint(null);
      fetchProgramDetails();
    }
  };

  const handleDeletePoint = async (id: string) => {
    const { error } = await supabase
      .from("program_points")
      .delete()
      .eq("id", id);
    if (error) console.error("Error deleting point:", error);
    else fetchProgramDetails();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!program) {
    return <div>No program details found.</div>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Program Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            value={program.title}
            onChange={(e) => setProgram({ ...program, title: e.target.value })}
          />
          <Textarea
            value={program.description}
            onChange={(e) =>
              setProgram({ ...program, description: e.target.value })
            }
          />
          <Button onClick={handleUpdateProgram}>Update Program Details</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Program Sections</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {program.sections.map((section) => (
              <AccordionItem
                value={section.id}
                key={section.id}
                className="p-4 border rounded-md"
              >
                <AccordionTrigger className="w-full flex justify-between">
                  {editingSection?.id === section.id ? (
                    <div className="space-y-4 flex-grow">
                      <Input
                        value={editingSection.section_title}
                        onChange={(e) =>
                          setEditingSection({
                            ...editingSection,
                            section_title: e.target.value,
                          })
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex space-x-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateSection();
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingSection(null);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-lg font-semibold text-left">
                        {section.section_title}
                      </h3>
                      <div className="flex space-x-2 ml-auto">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingSection(section);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSection(section.id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  )}
                </AccordionTrigger>
                <AccordionContent className="pl-8 pt-4 space-y-4">
                  {section.points.map((point) => (
                    <div
                      key={point.id}
                      className="flex items-center justify-between p-2 border rounded-md"
                    >
                      {editingPoint?.id === point.id ? (
                        <div className="flex items-center space-x-2 flex-grow">
                          <Input
                            value={editingPoint.content}
                            onChange={(e) =>
                              setEditingPoint({
                                ...editingPoint,
                                content: e.target.value,
                              })
                            }
                          />
                          <Button onClick={handleUpdatePoint}>Save</Button>
                          <Button
                            variant="outline"
                            onClick={() => setEditingPoint(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <>
                          <span>{point.content}</span>
                          <div className="flex space-x-2">
                            <Button onClick={() => setEditingPoint(point)}>
                              Edit
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={() => handleDeletePoint(point.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center space-x-2 pt-2">
                    <Input
                      placeholder="New Point"
                      onChange={(e) =>
                        setNewPoint({
                          content: e.target.value,
                          section_id: section.id,
                        })
                      }
                    />
                    <Button onClick={handleAddPoint}>Add Point</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="pt-4">
            <Input
              placeholder="New Section Title"
              value={newSection.section_title}
              onChange={(e) => setNewSection({ section_title: e.target.value })}
            />
            <Button onClick={handleAddSection} className="mt-2">
              Add Section
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
