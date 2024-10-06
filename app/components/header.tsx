import Link from "next/link";

const links = [
  {
    name: "Over",
    href: "over-mij",
  },
  {
    name: "Projecten",
    href: "projecten",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between pt-12">
      <Link href={"/"} className="flex gap-5 items-center">
        <p className="text-2xl font-bold text-primary">&lt;/&gt;</p>
        <p className="text-xl font-medium">Pebbles de Vries</p>
      </Link>

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
    </header>
  );
}
