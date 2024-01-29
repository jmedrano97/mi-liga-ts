import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">MILIGA.COM</h1>
          <p className="text-gray-500">07 octubre 2022</p>
        </div>

      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="/"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Home
        </a>
        <a href="#" className="py-2 pr-4">
          Nueva Liga
        </a>
        <a href="#" className="py-2 pr-4">
          ¿Quienes somos?
        </a>
        <a href="#" className="py-2">
          Ver más
        </a>
      </nav>
    </header>
  );
};

export default Header;
