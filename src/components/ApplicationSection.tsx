import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const ApplicationSection = () => {
  return (
    <section id="apply" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Program Overview */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-nigeria-gold text-white px-4 py-2 text-sm font-semibold">
            CALL FOR APPLICATIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LLD Gov-Tech Fellowship Program 2025
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Locally Led Development (LLD) invites applications from Nigerian civil servants for our 
            inaugural Gov-Tech Fellowship Program – a transformative 4-month intensive program.
          </p>
        </div>

        {/* Program Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Clock className="w-8 h-8 mx-auto text-nigeria-green mb-2" />
              <CardTitle>Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-tech-blue">4 Months</p>
              <p className="text-muted-foreground">Intensive Training</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Calendar className="w-8 h-8 mx-auto text-nigeria-green mb-2" />
              <CardTitle>Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-tech-blue">Twice</p>
              <p className="text-muted-foreground">Annually</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-8 h-8 mx-auto text-nigeria-green mb-2" />
              <CardTitle>Cohort Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-tech-blue">25</p>
              <p className="text-muted-foreground">Fellows per cohort</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="w-8 h-8 mx-auto text-nigeria-green mb-2" />
              <CardTitle>Format</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-tech-blue">90% Remote</p>
              <p className="text-muted-foreground">10% In-person</p>
            </CardContent>
          </Card>
        </div>

        {/* Program Dates */}
        <Card className="mb-16 bg-gradient-to-r from-tech-blue/10 to-nigeria-green/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Program Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-tech-blue mb-2">Cohort 1</h3>
                <p className="text-lg font-semibold">January 2026 – April 2026</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-tech-blue mb-2">Cohort 2</h3>
                <p className="text-lg font-semibold">July 2026 – October 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Criteria */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-nigeria-green" />
              Eligibility Criteria
            </CardTitle>
            <CardDescription>Mandatory Requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Nigerian Citizenship</h4>
                    <p className="text-muted-foreground text-sm">Current employment in Nigerian government (Local, State, or Federal)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Minimum 3 Years Experience</h4>
                    <p className="text-muted-foreground text-sm">Government service experience required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Educational Qualification</h4>
                    <p className="text-muted-foreground text-sm">Bachelor's degree or equivalent professional certification</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Technology Interest</h4>
                    <p className="text-muted-foreground text-sm">Demonstrated interest in technology applications in government</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Full Commitment</h4>
                    <p className="text-muted-foreground text-sm">Available for 4-month program with employer support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-nigeria-green mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">English Proficiency</h4>
                    <p className="text-muted-foreground text-sm">Ability to participate effectively in English-medium instruction</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Deadline */}
        <Card className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-red-700">
              <AlertCircle className="w-6 h-6 mr-2" />
              Application Deadline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-red-700 mb-2">October 24th, 2025 at 11:59 PM WAT</p>
            <p className="text-muted-foreground">
              Late applications will not be accepted. We encourage early submission to ensure all technical requirements are met.
            </p>
          </CardContent>
        </Card>

        {/* How to Apply */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">How to Apply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h4 className="font-semibold mb-2">Review Criteria</h4>
                <p className="text-muted-foreground text-sm">Review eligibility criteria and select your preferred track</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h4 className="font-semibold mb-2">Complete Application</h4>
                <p className="text-muted-foreground text-sm">Complete the online application at www.lld.africa/govtech-fellowship</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h4 className="font-semibold mb-2">Upload Documents</h4>
                <p className="text-muted-foreground text-sm">Upload all required documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h4 className="font-semibold mb-2">Submit</h4>
                <p className="text-muted-foreground text-sm">Submit before the deadline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-nigeria-green to-tech-blue hover:from-nigeria-green/90 hover:to-tech-blue/90 text-white text-xl px-12 py-6 rounded-lg font-semibold"
          >
            Apply Now - www.lld.africa/govtech-fellowship-apply
          </Button>
          <p className="text-muted-foreground mt-4 text-lg">
            Transform your career. Transform government. Transform Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;