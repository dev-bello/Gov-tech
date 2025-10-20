import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Faq = {
  id: string;
  question: string;
  answer: string;
  order_index: number;
};

export default function FaqsDashboard() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const { toast } = useToast();

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    const { data, error } = await supabase
      .from("faqs")
      .select()
      .order("order_index");
    if (error) {
      console.error("Error fetching FAQs:", error);
    } else {
      setFaqs(data as Faq[]);
    }
    setLoading(false);
  };

  const handleUpdate = async (faq: Faq) => {
    const { error } = await supabase
      .from("faqs")
      .update({ question: faq.question, answer: faq.answer })
      .eq("id", faq.id);

    if (error) {
      console.error("Error updating FAQ:", error);
    } else {
      toast({
        title: "Success",
        description: "FAQ updated successfully!",
      });
      setEditingFaq(null);
      fetchFaqs();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("faqs").delete().eq("id", id);
    if (error) {
      console.error("Error deleting FAQ:", error);
    } else {
      toast({
        title: "Success",
        description: "FAQ deleted successfully!",
      });
      fetchFaqs();
    }
  };

  const handleAdd = async () => {
    const { error } = await supabase.from("faqs").insert([
      {
        question: newFaq.question,
        answer: newFaq.answer,
        order_index: faqs.length + 1,
      },
    ]);

    if (error) {
      console.error("Error adding FAQ:", error);
    } else {
      toast({
        title: "Success",
        description: "FAQ added successfully!",
      });
      setNewFaq({ question: "", answer: "" });
      fetchFaqs();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New FAQ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="new-question">Question</Label>
            <Input
              id="new-question"
              value={newFaq.question}
              onChange={(e) =>
                setNewFaq({ ...newFaq, question: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="new-answer">Answer</Label>
            <Textarea
              id="new-answer"
              value={newFaq.answer}
              onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            />
          </div>
          <Button onClick={handleAdd}>Add FAQ</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage FAQs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="p-4 border rounded-md">
              {editingFaq?.id === faq.id ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`question-${faq.id}`}>Question</Label>
                    <Input
                      id={`question-${faq.id}`}
                      value={editingFaq.question}
                      onChange={(e) =>
                        setEditingFaq({
                          ...editingFaq,
                          question: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor={`answer-${faq.id}`}>Answer</Label>
                    <Textarea
                      id={`answer-${faq.id}`}
                      value={editingFaq.answer}
                      onChange={(e) =>
                        setEditingFaq({ ...editingFaq, answer: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => handleUpdate(editingFaq)}>
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setEditingFaq(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold">{faq.question}</h4>
                  <p>{faq.answer}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button onClick={() => setEditingFaq(faq)}>Edit</Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(faq.id)}
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
