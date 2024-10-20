"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Linkedin, Mail, Menu, Phone, X } from "react-feather";

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
    <div className="bg-menu fixed w-screen h-dvh left-0 top-0 py-5 container flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium border-b border-transparent w-fit hover:border-white transition duration-200"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button onClick={() => setIsOpen(false)}>
          <X width={32} height={32} />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-[1px] bg-slate-500 w-full"></div>
        <div className="flex gap-5 items-center justify-center">
          <Link href={"mailto:pebblesdevries@gmail.com"}>
            <Mail />
          </Link>

          <Link href={"tel:+31650878066"}>
            <Phone />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/pebbles-de-vries-999550292/"}
            target="_blank"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
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

      <div className="flex md:hidden h-fit z-10">
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
