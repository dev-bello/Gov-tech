import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Pedagogy = {
  id: string;
  title: string;
  description: string;
  order_index: number;
};

const PedagogySection = () => {
  const [pedagogy, setPedagogy] = useState<Pedagogy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedagogy = async () => {
      const { data, error } = await supabase
        .from("pedagogical_approaches")
        .select()
        .order("order_index");
      if (error) {
        console.error("Error fetching pedagogy:", error);
      } else {
        setPedagogy(data as Pedagogy[]);
      }
      setLoading(false);
    };

    fetchPedagogy();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="pedagogy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Pedagogical Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pedagogy.map((item) => (
            <Card key={item.id} className="border-none shadow-lg">
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
