import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Briefcase, Award, UserCheck, Globe } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert-Led Learning",
    description: "Training from Nigerian and international GovTech leaders, policy experts, and LLD's experienced team."
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Access to a community of forward-thinking government professionals and tech innovators."
  },
  {
    icon: Briefcase,
    title: "Practical Application",
    description: "Support for real-world capstone project addressing Nigeria's digital governance challenge."
  },
  {
    icon: Award,
    title: "Career Advancement",
    description: "Skills and certification to contribute to digital transformation in your agency."
  },
  {
    icon: UserCheck,
    title: "Mentorship",
    description: "One-on-one guidance from experienced GovTech practitioners."
  },
  {
    icon: Globe,
    title: "Certificate of Completion",
    description: "Recognized credential from LLD and partners."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What You'll Gain</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career and contribute to Nigeria's digital transformation through our comprehensive fellowship program
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-nigeria-green">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-nigeria-green to-tech-blue flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;