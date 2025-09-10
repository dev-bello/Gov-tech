import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramSection from "@/components/ProgramSection";
import ApplicationSection from "@/components/ApplicationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LLD Gov-Tech Fellowship Program 2025 - Advancing Government Technology in Nigeria</title>
        <meta name="description" content="Join the inaugural LLD Gov-Tech Fellowship Program 2025. A 4-month intensive program for Nigerian civil servants to advance government services through cutting-edge technology skills." />
        <meta name="keywords" content="Nigeria, Government Technology, Fellowship, Digital Transformation, Civil Servants, NITDA, Gov-Tech, LLD" />
        <link rel="canonical" href="https://lld.africa/govtech-fellowship" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="LLD Gov-Tech Fellowship Program 2025 - Nigeria" />
        <meta property="og:description" content="Transform your career and contribute to Nigeria's digital transformation. Apply for the Gov-Tech Fellowship Program." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lld.africa/govtech-fellowship" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LLD Gov-Tech Fellowship Program 2025" />
        <meta name="twitter:description" content="4-month intensive program for Nigerian civil servants to advance government technology skills." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "LLD Gov-Tech Fellowship Program",
            "description": "A transformative 4-month intensive program for Nigerian civil servants to develop cutting-edge Gov-tech skills",
            "url": "https://lld.africa/govtech-fellowship",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Nigeria"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-916-555-3328",
              "email": "fellowship@lld.africa",
              "contactType": "admissions"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main>
          <HeroSection />
          <BenefitsSection />
          <ProgramSection />
          <ApplicationSection />
          <ContactSection />
        </main>
        
        <footer className="bg-foreground text-background py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-semibold mb-2">Join us in building the future of digital governance in Nigeria.</p>
            <p className="text-muted mb-4">The change starts with you.</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-nigeria-green to-tech-blue"></div>
              <span className="font-bold">Locally Led Development (LLD)</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
