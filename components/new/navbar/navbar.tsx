"use client";
import { MenuIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-6 md:px-6">
      <Link href={"/"} className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">
          <Image src={"/icon.svg"} alt="logo" width={32} height={32} />
        </span>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden block text-muted-foreground hover:text-foreground focus:outline-none"
        onClick={toggleMenu}
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      <nav className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-background px-4 py-2 transition-height duration-300 ease-in-out`}>
        <div className="flex flex-col items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden w-full md:flex md:justify-center md:gap-10 transition-all duration-300 ease-in hover:text-foreground focus:text-foreground">
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Products
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
