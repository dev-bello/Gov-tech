import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

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

export type Module = {
  id: string;
  title: string;
  description: string;
  order_index: number;
  courses: Course[];
};

interface ProgramSectionProps {
  modules: Module[];
}

const ProgramSection = ({ modules }: ProgramSectionProps) => {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Curriculum Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The curriculum will blend theoretical knowledge with practical
            application, drawing from international best practices and Nigeria's
            specific Gov-tech landscape.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <Card
              key={module.id}
              className="h-full transition-shadow border-none shadow-lg"
            >
              <CardHeader
                className="cursor-pointer flex flex-row items-center justify-between"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 p-2 md:w-12 md:h-12 text-sm md:text-2xl rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {module.title}
                  </CardTitle>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform ${
                    openModule === module.id ? "rotate-180" : ""
                  }`}
                />
              </CardHeader>
              {openModule === module.id && (
                <CardContent>
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {module.courses.map((course) => (
                      <div key={course.id}>
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 text-[#032a58]">
                          {course.title}
                        </h4>
                        <ul className="space-y-2">
                          {course.topics.map((topic) => (
                            <li key={topic.id} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-[#032a58] mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">
                                {topic.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
