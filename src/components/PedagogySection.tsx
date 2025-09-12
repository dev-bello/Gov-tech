import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pedagogicalApproach = [
  {
    title: "Blended Learning",
    description:
      "A mix of online modules, interactive workshops, case studies, and practical exercises.",
  },
  {
    title: "Expert-Led Sessions",
    description:
      "Guest lectures from Nigerian Gov-tech leaders, policymakers, and international experts, including LLD's own team with expertise in technology, governance, public sector reform, and data management.",
  },
  {
    title: "Peer-to-Peer Learning",
    description:
      "Collaborative projects and discussion forums to encourage knowledge sharing among fellows.",
  },
  {
    title: "Mentorship",
    description:
      "Pairing fellows with experienced Gov-tech practitioners for guidance and support. LLD's founder has over 15 years of experience in governance, public sector reform, and civic technology.",
  },
];

const PedagogySection = () => {
  return (
    <section id="pedagogy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Pedagogical Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pedagogicalApproach.map((item, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
