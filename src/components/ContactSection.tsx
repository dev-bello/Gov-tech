import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

type ContactInfo = {
  email: string;
  phone: string;
  instagram_handle: string;
  linkedin_name: string;
  organization_name: string;
};

type Faq = {
  id: string;
  question: string;
  answer: string;
  order_index: number;
};

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: contactData, error: contactError } = await supabase
        .from("contact_info")
        .select()
        .single();
      if (contactError) {
        console.error("Error fetching contact info:", contactError);
      } else {
        setContactInfo(contactData);
      }

      const { data: faqsData, error: faqsError } = await supabase
        .from("faqs")
        .select()
        .order("order_index");
      if (faqsError) {
        console.error("Error fetching FAQs:", faqsError);
      } else {
        setFaqs(faqsData as Faq[]);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
                <Mail className="w-6 h-6 mr-2 text-blue-800" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo && (
                <>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-[#032a58]" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-blue-600"
                      target="_blank"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#032a58]" />
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-blue-600"
                      target="_blank"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 mr-3 text-[#032a58]" />
                    <a
                      href={`https://www.instagram.com/${contactInfo.instagram_handle}`}
                      className="text-gray-600 hover:text-blue-600"
                      target="_blank"
                    >
                      {contactInfo.instagram_handle}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-[#032a58]" />
                    <a
                      href={`https://www.linkedin.com/company/locally-led-development-lld/`}
                      className="text-gray-600 hover:text-blue-600"
                      target="_blank"
                    >
                      {contactInfo.organization_name}
                    </a>
                  </div>
                </>
              )}
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
                {faqs.map((faq) => (
                  <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
