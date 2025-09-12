import React from "react";

const sponsors = [
  {
    id: 1,
    name: "Federal Ministry of Communications and Digital Economy ",
    logo: "/min.PNG",
  },
  {
    id: 2,
    name: "National Information Technology Development Agency (NITDA)",
    logo: "/nitda.PNG",
  },
  { id: 3, name: "Tech Change (Washington, DC)", logo: "/tech change.webp" },
  { id: 4, name: "GovTech Singapore (Advisory)", logo: "/gov-tech.PNG" },
];

const SponsorsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Partners & Sponsors
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex-shrink-0 mx-4">
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id + sponsors.length}
                className="flex-shrink-0 mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
