import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Globe, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Information</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the fellowship program? We're here to help you get started on your Gov-Tech journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Program Inquiries */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Mail className="w-6 h-6 mr-2 text-nigeria-green" />
                Program Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                <span>fellowship@lld.africa</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                <span>+234 (0) 9165553328</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-muted-foreground" />
                <span>www.lld.africa/govtech-fellowship</span>
              </div>
            </CardContent>
          </Card>

          {/* Follow Us */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Linkedin className="w-6 h-6 mr-2 text-nigeria-green" />
                Follow Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-3 text-muted-foreground" />
                <span>@LLD_Africa</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-3 text-muted-foreground" />
                <span>Locally Led Development</span>
              </div>
              <div className="text-sm text-muted-foreground mt-6">
                LLD is an equal opportunity organization committed to diversity, inclusion, and accessibility in all our programs.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners Section */}
        <Card className="mt-16 bg-gradient-to-r from-tech-blue/10 to-nigeria-green/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Government Partners & International Collaborators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-nigeria-green mb-4">Government Partners:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• National Information Technology Development Agency (NITDA)</li>
                  <li>• State Information Technology Agencies</li>
                  <li>• Federal Ministry of Communications and Digital Economy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-nigeria-green mb-4">International Collaborators:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tech Change (Washington, DC)</li>
                  <li>• GovTech Singapore (Advisory)</li>
                  <li>• Various African GovTech initiatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I apply if I'm currently on NYSC service?</AccordionTrigger>
                <AccordionContent>
                  Yes, if you're serving in a government agency and have your employer's endorsement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What if my current role isn't directly technology-related?</AccordionTrigger>
                <AccordionContent>
                  The program is designed for government professionals from all departments who want to integrate technology into their work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there any cost to participate?</AccordionTrigger>
                <AccordionContent>
                  No, the fellowship is fully funded.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;