import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Shield,
  Laptop,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const modules = [
  {
    id: "module1",
    title: "Foundations of Gov-Tech & Digital Governance",
    number: "1",
    concepts:
      "This module provides a comprehensive overview of the Gov-Tech landscape, focusing on the foundational principles, policies, and ethical considerations necessary for effective digital governance in Nigeria.",
    courses: [
      {
        title: "Course 1: Policy & Regulatory Frameworks",
        topics: [
          "Overview of Nigeria's National ICT Policy and e-Government initiatives",
          "National Broadband Plan: Strategic importance for digital transformation",
          "Broadband Infrastructure Policy: Regulatory framework for telecommunications",
          "Connectivity Standards: Quality of service requirements for government applications",
        ],
      },
      {
        title: "Course 2: Ethical & Legal Considerations",
        topics: [
          "Data privacy (Nigeria Data Protection Act), cybersecurity basics",
          "Responsible AI in government",
          "Digital rights and citizen protection",
        ],
      },
      {
        title: "Course 3: Inclusive Digital Governance",
        topics: [
          "Digital Divide Analysis: Understanding barriers to technology access",
          "Inclusive Design Principles: Technology solutions for all citizens",
          "Community Engagement Strategies: Meaningful citizen participation",
          "Cultural Sensitivity: Local languages, customs, and traditional governance",
        ],
      },
    ],
  },
  {
    id: "module2",
    title: "Key Gov-Tech Domains & Solutions",
    number: "2",
    concepts:
      "This module explores the core domains of Gov-Tech, providing fellows with an understanding of the key technologies and solutions being implemented in the public sector.",
    courses: [
      {
        title: "Course 1: Digital Public Infrastructure (DPI)",
        topics: [
          "National Identity Management System components and interoperability",
          "Cloud Storage Infrastructure: Government cloud strategies",
          "Data Sovereignty: Nigerian government data considerations",
          "Broadband Infrastructure: Critical role in digital public services",
        ],
      },
      {
        title: "Course 2: Citizen-Centric Services (G2C)",
        topics: [
          "Government Service Portal (GSP) design and implementation",
          "UX/UI principles for government platforms",
          "Government Contact Centre (GCC) communication tools",
        ],
      },
      {
        title: "Course 3: Internal Government Operations (G2G & G2E)",
        topics: [
          "Electronic Document Management Systems (EDMS)",
          "Cloud-Based Document Management and collaboration",
          "Access Management for cloud services",
        ],
      },
    ],
  },
  {
    id: "module3",
    title: "Cybersecurity & Digital Security",
    number: "3",
    concepts:
      "This module addresses the critical importance of cybersecurity in the digital age, equipping fellows with the knowledge and skills to protect government systems and data.",
    courses: [
      {
        title: "Course 1: Threats & Risk Management",
        topics: [
          "Network Security: Securing broadband connections",
          "VPN Solutions: Secure connectivity for remote operations",
          "Bandwidth Management: Traffic prioritization for critical services",
        ],
      },
      {
        title: "Course 2: Incident Response & Resilience",
        topics: [
          "Cyber incident management strategies",
          "Building resilient digital infrastructure",
        ],
      },
    ],
  },
  {
    id: "module4",
    title: "Project Management & Innovation",
    number: "4",
    concepts:
      "This module focuses on the practical application of Gov-Tech solutions, providing fellows with the skills to manage projects, foster innovation, and drive change within their organizations.",
    courses: [
      {
        title: "Course 1: Agile Methodologies",
        topics: ["Applying agile and lean principles to government projects"],
      },
      {
        title: "Course 2: Procurement & Partnership",
        topics: [
          "Tech procurement strategies",
          "Public-private partnerships",
          "Collaborating with tech startups",
        ],
      },
      {
        title: "Course 3: Monitoring & Evaluation",
        topics: [
          "Data-driven governance and analytics",
          "Open data principles",
          "Impact assessment metrics",
        ],
      },
    ],
  },
];

const ProgramSection = () => {
  const [openModule, setOpenModule] = useState<string | null>("module");

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
          {modules.map((module) => (
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
                    {module.number}
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
                  <p className="text-gray-600 mb-6">{module.concepts}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {module.courses.map((course, index) => (
                      <div key={index}>
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-600">
                          {course.title}
                        </h4>
                        <ul className="space-y-2">
                          {course.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{topic}</span>
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
