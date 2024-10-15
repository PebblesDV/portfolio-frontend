"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Menu, X } from "react-feather";

const links = [
  {
    name: "Over",
    href: "/over-mij",
  },
  {
    name: "Projecten",
    href: "/projecten",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="bg-primary absolute w-screen h-dvh left-0 top-0">
      <button onClick={() => setIsOpen(false)}>
        <X />
      </button>

      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-xl font-medium border-b border-transparent hover:border-white transition duration-200"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center pt-5 md:pt-12">
      <Link href={"/"} className="flex gap-2 md:gap-5 items-center">
        <p className="text-xl md:text-2xl font-bold text-primary">&lt;/&gt;</p>
        <p className="text-xl md:text-xl font-medium">Pebbles de Vries</p>
      </Link>

      <div className="hidden md:flex">
        <div className="flex gap-10 items-center">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium border-b border-transparent hover:border-white transition duration-200"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex md:hidden h-fit">
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
