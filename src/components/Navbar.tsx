import Logo from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD9FE)] blur-md"></div>
            <Image src={Logo} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <nav className="hidden sm:flex items-center gap-x-6">
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 duration-500"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 duration-500"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 duration-500"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 duration-500"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 duration-500"
            >
              Customers
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
