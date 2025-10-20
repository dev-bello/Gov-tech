import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Pedagogy = {
  id: string;
  title: string;
  description: string;
  order_index: number;
};

export default function PedagogyDashboard() {
  const [pedagogy, setPedagogy] = useState<Pedagogy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPedagogy, setEditingPedagogy] = useState<Pedagogy | null>(null);
  const [newPedagogy, setNewPedagogy] = useState({
    title: "",
    description: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPedagogy();
  }, []);

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

  const handleUpdate = async (pedagogyItem: Pedagogy) => {
    const { error } = await supabase
      .from("pedagogical_approaches")
      .update({
        title: pedagogyItem.title,
        description: pedagogyItem.description,
      })
      .eq("id", pedagogyItem.id);

    if (error) {
      console.error("Error updating pedagogy:", error);
    } else {
      toast({
        title: "Success",
        description: "Pedagogy Section updated successfully!",
      });
      setEditingPedagogy(null);
      fetchPedagogy();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("pedagogical_approaches")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error deleting pedagogy:", error);
    } else {
      toast({
        title: "Success",
        description: "Pedagogy deleted successfully!",
      });
      fetchPedagogy();
    }
  };

  const handleAdd = async () => {
    const { error } = await supabase.from("pedagogical_approaches").insert([
      {
        title: newPedagogy.title,
        description: newPedagogy.description,
        order_index: pedagogy.length + 1,
      },
    ]);

    if (error) {
      console.error("Error adding pedagogy:", error);
    } else {
      toast({
        title: "Success",
        description: "Pedagogy added successfully!",
      });
      setNewPedagogy({ title: "", description: "" });
      fetchPedagogy();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Pedagogy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="new-title">Title</Label>
            <Input
              id="new-title"
              value={newPedagogy.title}
              onChange={(e) =>
                setNewPedagogy({ ...newPedagogy, title: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="new-description">Description</Label>
            <Textarea
              id="new-description"
              value={newPedagogy.description}
              onChange={(e) =>
                setNewPedagogy({ ...newPedagogy, description: e.target.value })
              }
            />
          </div>
          <Button onClick={handleAdd}>Add Pedagogy</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Pedagogy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pedagogy.map((item) => (
            <div key={item.id} className="p-4 border rounded-md">
              {editingPedagogy?.id === item.id ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`title-${item.id}`}>Title</Label>
                    <Input
                      id={`title-${item.id}`}
                      value={editingPedagogy.title}
                      onChange={(e) =>
                        setEditingPedagogy({
                          ...editingPedagogy,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${item.id}`}>
                      Description
                    </Label>
                    <Textarea
                      id={`description-${item.id}`}
                      value={editingPedagogy.description}
                      onChange={(e) =>
                        setEditingPedagogy({
                          ...editingPedagogy,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleUpdate(editingPedagogy)}>
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setEditingPedagogy(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button onClick={() => setEditingPedagogy(item)}>
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
