const Footer = () => {
  return (
    <footer className="bg-[#032a58] text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:ml-24 ml-12 md:text-left mb-4 md:mb-0">
            <img src="/LLD.png" width={200} height={200} alt="" />
          </div>
          <div className="text-center text-gray-400 text-3xl font-bold md:text-left">
            <p className="text-sm ">In partnership with</p>
            <img
              src="/partner.jpeg"
              width={200}
              height={200}
              alt="Partner Logo"
              className="mt-1 "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
