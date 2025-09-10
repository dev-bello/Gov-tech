import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Shield, Laptop, TrendingUp } from "lucide-react";

const modules = [
  {
    id: "module1",
    title: "Foundations of Gov-Tech & Digital Governance",
    icon: BookOpen,
    courses: [
      {
        title: "Policy & Regulatory Frameworks",
        topics: [
          "Overview of Nigeria's National ICT Policy and e-Government initiatives",
          "National Broadband Plan: Strategic importance for digital transformation",
          "Broadband Infrastructure Policy: Regulatory framework for telecommunications",
          "Connectivity Standards: Quality of service requirements for government applications"
        ]
      },
      {
        title: "Ethical & Legal Considerations",
        topics: [
          "Data privacy (Nigeria Data Protection Act), cybersecurity basics",
          "Responsible AI in government",
          "Digital rights and citizen protection"
        ]
      },
      {
        title: "Inclusive Digital Governance",
        topics: [
          "Digital Divide Analysis: Understanding barriers to technology access",
          "Inclusive Design Principles: Technology solutions for all citizens",
          "Community Engagement Strategies: Meaningful citizen participation",
          "Cultural Sensitivity: Local languages, customs, and traditional governance"
        ]
      }
    ]
  },
  {
    id: "module2",
    title: "Key Gov-Tech Domains & Solutions",
    icon: Laptop,
    courses: [
      {
        title: "Digital Public Infrastructure (DPI)",
        topics: [
          "National Identity Management System components and interoperability",
          "Cloud Storage Infrastructure: Government cloud strategies",
          "Data Sovereignty: Nigerian government data considerations",
          "Broadband Infrastructure: Critical role in digital public services"
        ]
      },
      {
        title: "Citizen-Centric Services (G2C)",
        topics: [
          "Government Service Portal (GSP) design and implementation",
          "UX/UI principles for government platforms",
          "Government Contact Centre (GCC) communication tools"
        ]
      },
      {
        title: "Internal Government Operations (G2G & G2E)",
        topics: [
          "Electronic Document Management Systems (EDMS)",
          "Cloud-Based Document Management and collaboration",
          "Access Management for cloud services"
        ]
      }
    ]
  },
  {
    id: "module3",
    title: "Cybersecurity & Digital Security",
    icon: Shield,
    courses: [
      {
        title: "Threats & Risk Management",
        topics: [
          "Network Security: Securing broadband connections",
          "VPN Solutions: Secure connectivity for remote operations",
          "Bandwidth Management: Traffic prioritization for critical services"
        ]
      },
      {
        title: "Incident Response & Resilience",
        topics: [
          "Cyber incident management strategies",
          "Building resilient digital infrastructure"
        ]
      }
    ]
  },
  {
    id: "module4",
    title: "Project Management & Innovation",
    icon: TrendingUp,
    courses: [
      {
        title: "Agile Methodologies",
        topics: [
          "Applying agile and lean principles to government projects"
        ]
      },
      {
        title: "Procurement & Partnership",
        topics: [
          "Tech procurement strategies",
          "Public-private partnerships",
          "Collaborating with tech startups"
        ]
      },
      {
        title: "Monitoring & Evaluation",
        topics: [
          "Data-driven governance and analytics",
          "Open data principles",
          "Impact assessment metrics"
        ]
      }
    ]
  }
];

const ProgramSection = () => {
  return (
    <section id="curriculum" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Curriculum Structure</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive 4-module program blending theoretical knowledge with practical application, 
            drawing from international best practices and Nigeria's specific Gov-tech landscape
          </p>
        </div>

        <Tabs defaultValue="module1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {modules.map((module) => (
              <TabsTrigger key={module.id} value={module.id} className="text-xs sm:text-sm p-2 sm:p-3 flex-col sm:flex-row gap-1 sm:gap-2">
                <module.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Module</span> {module.id.slice(-1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-3 text-xl sm:text-2xl">
                    <module.icon className="w-6 h-6 sm:w-8 sm:h-8 text-nigeria-green flex-shrink-0" />
                    <span className="text-left">{module.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {module.courses.map((course, index) => (
                      <div key={index} className="border-l-4 border-tech-blue pl-4 sm:pl-6">
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 text-tech-blue">{course.title}</h4>
                        <ul className="space-y-2">
                          {course.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-nigeria-green mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-12 bg-gradient-to-r from-nigeria-green/10 to-tech-blue/10">
          <CardHeader>
            <CardTitle className="text-2xl">Capstone Project & Presentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              Fellows will work on a real-world Gov-tech challenge relevant to the Nigerian context, 
              applying knowledge and skills acquired throughout the program.
            </p>
            <p className="text-muted-foreground">
              Projects will be presented to a panel of experts, including government officials and tech leaders.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramSection;