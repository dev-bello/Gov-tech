import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Topic = {
  id: string;
  course_id: string;
  title: string;
};

type Course = {
  id: string;
  module_id: string;
  title: string;
  description: string;
  order_index: number;
  topics: Topic[];
};

type Module = {
  id: string;
  title: string;
  description: string;
  order_index: number;
  courses: Course[];
};

export default function CurriculumDashboard() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [newModule, setNewModule] = useState({ title: "", description: "" });
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    module_id: "",
  });
  const [newTopic, setNewTopic] = useState({ title: "", course_id: "" });

  useEffect(() => {
    fetchCurriculum();
  }, []);

  const fetchCurriculum = async () => {
    const { data: modulesData, error: modulesError } = await supabase
      .from("curriculum_modules")
      .select()
      .order("order_index");

    if (modulesError) {
      console.error("Error fetching modules:", modulesError);
      setLoading(false);
      return;
    }

    const { data: coursesData, error: coursesError } = await supabase
      .from("curriculum_courses")
      .select()
      .order("order_index");

    if (coursesError) {
      console.error("Error fetching courses:", coursesError);
      setLoading(false);
      return;
    }

    const { data: topicsData, error: topicsError } = await supabase
      .from("curriculum_topics")
      .select();

    if (topicsError) {
      console.error("Error fetching topics:", topicsError);
      setLoading(false);
      return;
    }

    const curriculum = modulesData.map((module) => ({
      ...module,
      courses: coursesData
        .filter((course) => course.module_id === module.id)
        .map((course) => ({
          ...course,
          topics: topicsData.filter((topic) => topic.course_id === course.id),
        })),
    }));

    setModules(curriculum as Module[]);
    setLoading(false);
  };

  const handleAddModule = async () => {
    const { error } = await supabase.from("curriculum_modules").insert([
      {
        title: newModule.title,
        description: newModule.description,
        order_index: modules.length + 1,
      },
    ]);
    if (error) console.error("Error adding module:", error);
    else {
      setNewModule({ title: "", description: "" });
      fetchCurriculum();
    }
  };

  const handleAddCourse = async () => {
    const { error } = await supabase.from("curriculum_courses").insert([
      {
        title: newCourse.title,
        description: newCourse.description,
        module_id: newCourse.module_id,
        order_index:
          modules.find((m) => m.id === newCourse.module_id)?.courses.length + 1,
      },
    ]);
    if (error) console.error("Error adding course:", error);
    else {
      setNewCourse({ title: "", description: "", module_id: "" });
      fetchCurriculum();
    }
  };

  const handleAddTopic = async () => {
    const { error } = await supabase.from("curriculum_topics").insert([
      {
        title: newTopic.title,
        course_id: newTopic.course_id,
      },
    ]);
    if (error) console.error("Error adding topic:", error);
    else {
      setNewTopic({ title: "", course_id: "" });
      fetchCurriculum();
    }
  };

  const handleDeleteModule = async (id: string) => {
    const { error } = await supabase
      .from("curriculum_modules")
      .delete()
      .eq("id", id);
    if (error) console.error("Error deleting module:", error);
    else fetchCurriculum();
  };

  const handleUpdateModule = async () => {
    if (!editingModule) return;
    const { error } = await supabase
      .from("curriculum_modules")
      .update({
        title: editingModule.title,
        description: editingModule.description,
      })
      .eq("id", editingModule.id);

    if (error) console.error("Error updating module:", error);
    else {
      setEditingModule(null);
      fetchCurriculum();
    }
  };

  const handleDeleteCourse = async (id: string) => {
    const { error } = await supabase
      .from("curriculum_courses")
      .delete()
      .eq("id", id);
    if (error) console.error("Error deleting course:", error);
    else fetchCurriculum();
  };

  const handleUpdateCourse = async () => {
    if (!editingCourse) return;
    const { error } = await supabase
      .from("curriculum_courses")
      .update({
        title: editingCourse.title,
        description: editingCourse.description,
      })
      .eq("id", editingCourse.id);

    if (error) console.error("Error updating course:", error);
    else {
      setEditingCourse(null);
      fetchCurriculum();
    }
  };

  const handleUpdateTopic = async () => {
    if (!editingTopic) return;
    const { error } = await supabase
      .from("curriculum_topics")
      .update({ title: editingTopic.title })
      .eq("id", editingTopic.id);

    if (error) console.error("Error updating topic:", error);
    else {
      setEditingTopic(null);
      fetchCurriculum();
    }
  };

  const handleDeleteTopic = async (id: string) => {
    const { error } = await supabase
      .from("curriculum_topics")
      .delete()
      .eq("id", id);
    if (error) console.error("Error deleting topic:", error);
    else fetchCurriculum();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Module</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="new-module-title">Title</Label>
            <Input
              id="new-module-title"
              value={newModule.title}
              onChange={(e) =>
                setNewModule({ ...newModule, title: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="new-module-description">Description</Label>
            <Textarea
              id="new-module-description"
              value={newModule.description}
              onChange={(e) =>
                setNewModule({ ...newModule, description: e.target.value })
              }
            />
          </div>
          <Button onClick={handleAddModule}>Add Module</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Curriculum</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((module) => (
              <AccordionItem
                value={module.id}
                key={module.id}
                className="p-4 border rounded-md"
              >
                <AccordionTrigger className="w-full flex justify-between">
                  {editingModule?.id === module.id ? (
                    <div className="space-y-4 flex-grow">
                      <Input
                        value={editingModule.title}
                        onChange={(e) =>
                          setEditingModule({
                            ...editingModule,
                            title: e.target.value,
                          })
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Textarea
                        value={editingModule.description}
                        onChange={(e) =>
                          setEditingModule({
                            ...editingModule,
                            description: e.target.value,
                          })
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex space-x-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateModule();
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingModule(null);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <h3 className="text-lg font-semibold text-left">
                          {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-left">
                          {module.description}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-auto">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingModule(module);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteModule(module.id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  )}
                </AccordionTrigger>
                <AccordionContent className="pl-8 pt-4 space-y-4">
                  {module.courses.map((course) => (
                    <Card key={course.id}>
                      <CardHeader>
                        {editingCourse?.id === course.id ? (
                          <div className="space-y-4">
                            <Input
                              value={editingCourse.title}
                              onChange={(e) =>
                                setEditingCourse({
                                  ...editingCourse,
                                  title: e.target.value,
                                })
                              }
                            />
                            <Textarea
                              value={editingCourse.description}
                              onChange={(e) =>
                                setEditingCourse({
                                  ...editingCourse,
                                  description: e.target.value,
                                })
                              }
                            />
                            <div className="flex space-x-2">
                              <Button onClick={handleUpdateCourse}>Save</Button>
                              <Button
                                variant="outline"
                                onClick={() => setEditingCourse(null)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <div>
                              <CardTitle>{course.title}</CardTitle>
                              <p>{course.description}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button onClick={() => setEditingCourse(course)}>
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={() => handleDeleteCourse(course.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <h4 className="font-semibold">Topics</h4>
                        {course.topics.map((topic) => (
                          <div
                            key={topic.id}
                            className="flex items-center justify-between p-2 border rounded-md"
                          >
                            {editingTopic?.id === topic.id ? (
                              <div className="flex items-center space-x-2 flex-grow">
                                <Input
                                  value={editingTopic.title}
                                  onChange={(e) =>
                                    setEditingTopic({
                                      ...editingTopic,
                                      title: e.target.value,
                                    })
                                  }
                                />
                                <Button onClick={handleUpdateTopic}>
                                  Save
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setEditingTopic(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            ) : (
                              <>
                                <span>{topic.title}</span>
                                <div className="flex space-x-2">
                                  <Button
                                    onClick={() => setEditingTopic(topic)}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleDeleteTopic(topic.id)}
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
                            placeholder="New Topic Title"
                            onChange={(e) =>
                              setNewTopic({
                                title: e.target.value,
                                course_id: course.id,
                              })
                            }
                          />
                          <Button onClick={handleAddTopic}>Add Topic</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Card>
                    <CardHeader>
                      <CardTitle>Add New Course</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="Course Title"
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            title: e.target.value,
                            module_id: module.id,
                          })
                        }
                      />
                      <Textarea
                        placeholder="Course Description"
                        onChange={(e) =>
                          setNewCourse({
                            ...newCourse,
                            description: e.target.value,
                          })
                        }
                      />
                      <Button onClick={handleAddCourse}>Add Course</Button>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
