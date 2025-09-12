import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/LLD.png" width={75} height={75} alt="" />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#curriculum" className="text-gray-600 hover:text-blue-600">
            Curriculum
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-600">
            Program Goal
          </a>
          <a href="#apply" className="text-gray-600 hover:text-blue-600">
            Program Details
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
