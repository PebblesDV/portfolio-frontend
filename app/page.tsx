import Card from "./components/card";

export default async function Home() {
  return (
    <main className="my-20">
      <div className="flex flex-col items-center gap-5">
        <p className="font-extrabold text-2xl w-2/5 text-center">
          Student{" "}
          <span className="text-primary">&#123;Web-Development&#125;</span> aan
          het Grafisch Lyceum Utrecht
        </p>

        <p className="w-3/5 text-center">
          Hoi! Ik ben Pebbles de Vries, een MBO Web-Development student. Welkom
          bij mijn portfolio. Hier laat ik projecten zien waar ik trots op ben,
          en die goed aantonen wat ik tot nu toe kan en waar ik mee bezig ben!
        </p>
      </div>

      <div>
        <Card />
      </div>
    </main>
  );
}
