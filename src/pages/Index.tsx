import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import ApplicationSection from "@/components/ApplicationSection";
import ContactSection from "@/components/ContactSection";
import PedagogySection from "@/components/PedagogySection";
import SponsorsSection from "@/components/SponsorsSection";
import HowToApplySection from "@/components/HowToApplySection";

interface IndexProps {
  openModal: () => void;
}

const Index = ({ openModal }: IndexProps) => {
  return (
    <>
      <Helmet>
        <title>
          LLD Gov-Tech Fellowship Program 2025 - Advancing Government Technology
          in Nigeria
        </title>
        <meta
          name="description"
          content="Join the inaugural LLD Gov-Tech Fellowship Program 2025. A 4-month intensive program for Nigerian civil servants to advance government services through cutting-edge technology skills."
        />
        <meta
          name="keywords"
          content="Nigeria, Government Technology, Fellowship, Digital Transformation, Civil Servants, NITDA, Gov-Tech, LLD"
        />
        <link rel="canonical" href="https://lld.africa/govtech-fellowship" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="LLD Gov-Tech Fellowship Program 2025 - Nigeria"
        />
        <meta
          property="og:description"
          content="Transform your career and contribute to Nigeria's digital transformation. Apply for the Gov-Tech Fellowship Program."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lld.africa/govtech-fellowship"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LLD Gov-Tech Fellowship Program 2025"
        />
        <meta
          name="twitter:description"
          content="4-month intensive program for Nigerian civil servants to advance government technology skills."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "LLD Gov-Tech Fellowship Program",
            description:
              "A transformative 4-month intensive program for Nigerian civil servants to develop cutting-edge Gov-tech skills",
            url: "https://lld.africa/govtech-fellowship",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Nigeria",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-916-555-3328",
              email: "fellowship@lld.africa",
              contactType: "admissions",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main>
          <HeroSection openModal={openModal} />
          <ApplicationSection openModal={openModal} />
          <HowToApplySection openModal={openModal} />

          <ProgramSection />
          <PedagogySection />

          <SponsorsSection />

          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
