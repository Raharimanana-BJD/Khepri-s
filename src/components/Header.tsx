"use client";
import Image from "next/image";
import { logo_1 } from "../asset";
import { Links } from "../lib/constant";
import Link from "next/link";
import { Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { stylesIcon } from "../lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full pb-4 pt-10 fixed bg-grey-100 shadow-2xl shadow-grey-100">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Image
          src={logo_1}
          alt="Khepri Service"
          className="h-auto"
          priority
          // className="dark:invert"
        />
        <NavLinks />
        <button className="bg-primary p-2 rounded-lg sm:block hidden">
          <Moon fill={`${stylesIcon.black}`} strokeWidth={0} />
        </button>
        <button onClick={toggleMobileMenu} className="bg-primary p-2 rounded-lg uppercase text-secondary-500 font-medium text-xl block sm:hidden">
          menu
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <NavMobile onClose={toggleMobileMenu} />}
      </AnimatePresence>
    </header>
  );
}

function NavLinks() {
  const currentPath = usePathname();

  return (
    <nav className="sm:flex hidden items-center space-x-8">
      {Links.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`${"font-medium"} ${
            currentPath == item.path && "px-4 py-2 bg-primary rounded"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

interface NavMobileProps {
  onClose: () => void;
}

function NavMobile({ onClose }: NavMobileProps) {
  const currentPath = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.3 }}
      className="z-10 flex flex-col items-center justify-center h-screen w-full space-y-8 fixed top-0 left-0 bg-primary p-8"
    >
      <button
        onClick={onClose}
        className="p-2 rounded-lg uppercase text-xl font-medium border border-secondary-500 absolute top-9 right-8"
      >
        close
      </button>
      {Links.map((item, index) => (
        <Link
        onClick={onClose}
          href={item.path}
          key={index}
          className={`font-medium text-3xl ${
            currentPath == item.path && "px-4 py-2 bg-secondary-500 text-primary rounded"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <button className="border p-2 rounded-lg border-secondary-500">
        <Moon fill={`${stylesIcon.black}`} strokeWidth={0} />
      </button>
    </motion.nav>
  );
}