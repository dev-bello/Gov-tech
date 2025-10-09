import { Button } from "@/components/ui/button";

interface HeaderProps {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/LLD.png" width={75} height={75} alt="" />
        </div>
        <nav className=" flex items-center space-x-6">
          <button
            className="border border-black rounded-sm p-2"
            onClick={openModal}
          >
            Apply now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
