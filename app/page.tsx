import Link from "next/link";
import Card from "./components/card";

export default async function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-12 justify-center flex-1 py-20">
      <div className="flex flex-col items-center gap-5">
        <p className="font-extrabold text-xl md:text-2xl w-full md:w-2/5 text-center">
          Student{" "}
          <span className="text-primary">&#123;Web-Development&#125;</span> aan
          het Grafisch Lyceum Utrecht
        </p>

        <p className="w-full md:w-3/5 text-center">
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

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-7">
        <Card title="Projecten" href="/projecten" />
        <Card title="Over mij" href="/over-mij" />
      </div>
    </main>
  );
}
