import Link from "next/link";
import Card from "./components/card";
import FotoPebbles from "@/public/pebbles.jpeg";
import FotoCode from "@/public/code.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pebbles de Vries - Portfolio",
  description: "Student Web Development in Aalsmeer - Noord-Holland",
  openGraph: {
    images: [
      {
        url: "/public/code.webp",
        width: "1200",
        height: "630",
        alt: "link",
      },
    ],
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-12 justify-center flex-1 py-12">
      <div className="flex flex-col items-center gap-3 lg:gap-5">
        <p className="font-extrabold text-xl lg:text-2xl w-full lg:w-2/5 lg:text-center">
          Studente{" "}
          <span className="text-primary">&#123;Web-Development&#125;</span> aan
          het Grafisch Lyceum Utrecht
        </p>

        <p className="w-full lg:w-3/5 lg:text-center">
          Hoi! Ik ben Pebbles de Vries, een MBO Web-Development student. Welkom
          bij mijn portfolio. Hier laat ik projecten zien waar ik trots op ben,
          en die goed aantonen wat ik tot nu toe kan!
        </p>

        <Link
          href={"contact"}
          className="bg-primary px-6 py-1 w-fit rounded-2xl drop-shadow-custom-blue self-center hover:bg-primaryHover active:scale-90 transition duration-200 font-semibold"
        >
          Contact
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 lg:gap-7">
        <Card title="Projecten" href="/projecten" imageSrc={FotoCode} />
        <Card title="Over mij" href="/over-mij" imageSrc={FotoPebbles} />
      </div>
    </main>
  );
}
