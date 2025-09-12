import { Button } from "@/components/ui/button";
const timelineData = [
  {
    title: "Step 1",
    description: "Review eligibility criteria and select your preferred track",
    align: "left",
  },
  {
    title: "Step 2",
    description: "Complete the online application ",
    align: "right",
  },
  {
    title: "Step 3",
    description: "Upload all required documents",
    align: "left",
  },
  {
    title: "Step 4",
    description: "Submit before 11:59 PM WAT on October 28, 2025",
    align: "right",
  },
];

const HowToApplySection = () => {
  return (
    <section id="how-to-apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            How to Apply
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these steps to join the fellowship program.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  item.align === "left" ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-5/12">
                  <div
                    className={`p-6 rounded-lg shadow-lg bg-white ${
                      item.align === "left" ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
          Fellows will work on a real-world Gov-tech challenge relevant to the
          Nigerian context, applying knowledge and skills acquired throughout
          the program. Projects will be presented to a panel of experts,
          including government officials and tech leaders.
        </p>
        {/* Program Details */}
        <div className="text-center mb-16">
          <p className="text-xl mt-4 text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="font-bold">Duration:</span> 4-month intensive
            program
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="font-bold">Frequency:</span> Twice a year (2
            cohorts per year)
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <span className="font-bold">Program Dates:</span> Cohort 1: January
            2026 – April 2026 | Cohort 2: July - October 2026
          </p>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 rounded-lg font-semibold"
          >
            Apply for 2025 Cohort
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToApplySection;
