import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

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

export type Program = {
  id: string;
  title: string;
  description: string;
  sections: Section[];
};

interface ApplicationSectionProps {
  openModal: () => void;
  program: Program | null;
}

const ApplicationSection = ({
  openModal,
  program,
}: ApplicationSectionProps) => {
  if (!program) {
    return <div>No program details available.</div>;
  }

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {program.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {program.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {program.sections.map((section) => (
            <Card key={section.id} className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-gray-800">
                  {section.section_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside list-red flex flex-col text-lg text-gray-600 space-y-4">
                  {section.points.map((point) => (
                    <li key={point.id}>{point.content}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#032a58] hover:bg-blue-700 text-white text-xl px-12 py-6 rounded-lg font-semibold"
            onClick={openModal}
          >
            Apply for 2025 Cohort
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
