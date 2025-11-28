"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="px-4 md:px-24 py-4 bg-white flex justify-between items-center shadow-md w-full fixed top-0 z-50">
      {/* Logo */}
      <div>
        <Image
          src="/images/navimage2.png"
          width={130}
          height={100}
          alt="nav-logo"
          className="w-8 h-8 md:w-12 md:h-12"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-12 text-black font-medium">
        <li className={`hover:text-[#0059FF] transition ${pathname === "/" ? "text-[#000000] font-bold tracking-wider" : 'text-black'}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`hover:text-[#0059FF] transition ${pathname === "/project" ? "text-[#000000] font-bold tracking-wider" : 'text-black'}`}>
          <Link href="/#project">Projects</Link>
        </li>
        <li className={`hover:text-[#0059FF] transition ${pathname === "/about" ? "text-[#000000] font-bold tracking-wider" : 'text-black'}`}>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-[#020037] text-white px-6 py-2 rounded-full hover:scale-105 cursor-pointer transition">
          Contact me
        </button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoClose size={28} className="text-black" />
          ) : (
            <IoMenu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 z-50 md:hidden">
          <ul className="flex flex-col items-center gap-6 text-black font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#project" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#020037] text-white px-6 py-2 rounded-full hover:bg-[#030050] transition"
              >
                Contact me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

// const Nav = () => { return ( <div className='px-4 md:px-24 py-8 bg-white flex justify-between'> <div> <Image src="/images/navimage.png" width={130} height={100} alt='nav-logo' className='w-12 h-12 bg-black'/> </div> <div className='text-black'> <ul className='flex justify-center items-center gap-12'> <li><Link href='/'>Home</Link></li> <li><Link href='#project'>Projects</Link></li> <li><Link href='#'>About</Link></li> </ul> </div> <div> <button className='bg-[#020037] text-white px-6 py-2 rounded-full cursor-pointer'>Contact me</button> </div> </div> ) } export default Nav
