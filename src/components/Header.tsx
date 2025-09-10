import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-nigeria-green to-tech-blue"></div>
          <span className="text-xl font-bold text-foreground">LLD</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#program" className="text-muted-foreground hover:text-foreground">Program</a>
          <a href="#curriculum" className="text-muted-foreground hover:text-foreground">Curriculum</a>
          <a href="#apply" className="text-muted-foreground hover:text-foreground">Apply</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Book a call
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-nigeria-green to-tech-blue hover:from-nigeria-green/90 hover:to-tech-blue/90">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;