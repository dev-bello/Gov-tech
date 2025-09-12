import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-700/75 z-10"></div>
        <img
          src="ddd.jpg"
          alt="Nigerian professionals in Gov-Tech training session with laptops and collaborative learning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            LLD Gov-Tech
            <br />
            <span className="text-nigeria-gold">Fellowship Program</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advancing Government services through technology in Nigeria
            <br />
            Equip Nigerian civil servants with cutting-edge Gov-tech skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-lg font-semibold"
            >
              Apply for 2025 Cohort
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-nigeria-gold">
                4 Months
              </div>
              <div className="text-lg">Intensive Program</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nigeria-gold">
                25 Fellows
              </div>
              <div className="text-lg">Per Cohort</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nigeria-gold">
                2x Yearly
              </div>
              <div className="text-lg">Intake</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
