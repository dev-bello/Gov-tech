import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { Button } from "./ui/button";

interface ApplicationSectionProps {
  openModal: () => void;
}

const ApplicationSection = ({ openModal }: ApplicationSectionProps) => {
  return (
    <section id="apply" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Program Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Program Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The LLD Gov-Tech Fellowship Program is a 4-month intensive program
            that runs twice a year. We partner with government agencies to
            identify and solve critical challenges in public service delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Eligibility Criteria */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col text-lg text-gray-600 space-y-4">
                <li className="flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-3 text-green-600" />
                  Must be a Nigerian civil servant at the federal, state, or
                  local government level.
                </li>
                <li className="flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-3 text-green-600" />
                  Minimum of 5 years of experience in the public service.
                </li>
                <li className="flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-3 text-green-600" />
                  Demonstrated interest in technology and digital
                  transformation.
                </li>
                <li className="flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-3 text-green-600  " />
                  Strong analytical and problem-solving skills.
                </li>
                <li className="flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-3 text-green-600" />
                  Excellent communication and interpersonal skills.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* What You'll Gain */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">
                What You'll Gain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-justify list-inside list-red flex flex-col text-md text-gray-600 space-y-1">
                <li>
                  Expert-Led Learning: Training from Nigerian and international
                  GovTech leaders, policy experts, and LLD's experienced team.
                </li>
                <li>
                  Professional Network: Access to a community of
                  forward-thinking government professionals and tech innovators.
                </li>
                <li>
                  Practical Application: Support for real-world capstone project
                  addressing Nigeria's digital governance challenge.
                </li>
                <li>
                  Career Advancement: Skills and certification to contribute to
                  digital transformation in your agency.
                </li>
                <li>
                  Mentorship: One-on-one guidance from experienced GovTech
                  practitioners.
                </li>
                <li>
                  Certificate of Completion: Recognized credential from LLD and
                  partners.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Learning Modalities: */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">
                Learning Modalities
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                <li>Blended Learning: 90% remote, 10% in-person</li>
                <li>Weekly Commitment: 4hours per week </li>
                <li>
                  Capstone Project: Final 2 weeks dedicated to project
                  development and presentation
                </li>
                <li>
                  Technology Access: Laptops and internet connectivity support
                  as needed
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Post-Fellowship Opportunities */}
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">
                Post-Fellowship Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-4">
                <li>
                  LLD Alumni Network: Ongoing peer collaboration and learning
                </li>
                <li>
                  Advanced Certifications: Pathways to specialized international
                  certifications
                </li>
                <li>
                  Consulting Opportunities: Potential involvement in LLD's
                  government consulting projects
                </li>
                <li>
                  Leadership Roles: Priority consideration for senior GovTech
                  positions
                </li>
                <li>
                  International Exchanges: Opportunities for study tours and
                  international fellowships
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 rounded-lg font-semibold"
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
