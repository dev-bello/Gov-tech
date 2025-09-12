import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about the LLD Gov-Tech Fellowship? We're here to
            help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Program Inquiries */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-500" />
                <a
                  href="mailto:fellowship@lld.africa"
                  className="text-gray-600 hover:text-blue-600"
                >
                  fellowship@lld.africa
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-500" />
                <a
                  href="tel:+2349165553328"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +234 916 555 3328
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-3 text-gray-500" />
                <a
                  href="https://www.instagram.com/lld_africa"
                  className="text-gray-600 hover:text-blue-600"
                >
                  lld_africa
                </a>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl  text-gray-800">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can I apply if I'm currently on NYSC service?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, if you're serving in a government agency and have your
                    employer's endorsement..
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What if my current role isn't directly technology related?
                  </AccordionTrigger>
                  <AccordionContent>
                    The program is designed for government professionals from
                    all departments who want to integrate technology into their
                    work.^
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is there any cost to participate?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, the fellowship is fully funded.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
