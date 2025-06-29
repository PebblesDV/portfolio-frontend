import Image from "next/image";
import Tag from "../components/tag";
import FotoPebbles from "@/public/pebbles.jpeg";
import { Metadata } from "next";
import { getAboutTags } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Pebbles de Vries - Over mij",
  description: "Student Web Development in Aalsmeer - Noord-Holland",
  openGraph: {
    images: [
      {
        url: "/public/code.webp",
        width: "600",
        height: "300",
        alt: "link",
      },
    ],
  },
};

export default async function About() {
  const tags = await getAboutTags();
  console.log(tags);
  return (
    <main className="flex self-center flex-1 justify-center flex-col gap-10 lg:gap-24 py-5 px-5 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={FotoPebbles}
            alt="pebbles"
            width={0}
            height={0}
            className="rounded-full"
            sizes="100vw"
            style={{ objectFit: "cover", height: "250px", width: "250px" }}
            placeholder="blur"
          />
        </div>

        <div className="flex flex-col gap-1 lg:col-span-2">
          <p className="text-2xl font-bold">Wie ben ik?</p>
          <p>
            Hoi! Ik ben Pebbles de Vries, een 21 jarige Web Development student.
            Ik woon in de randstad, en ga naar school op het Grafisch Lyceum in
            Utrecht. Ook buiten school om vind ik het leuk om bezig te zijn met
            nieuwe projecten en technologieën om mijn vaardigheden te
            verbeteren. Ik doe mijn opleiding versneld, wat inhoud dat ik alles
            binnen 3 jaar zal afronden in plaats van de standaard 4!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <p className="text-2xl font-bold">Wat doe/kan ik?</p>
          <p>
            Op dit moment zit ik in het 2e jaar van mijn opleiding. Ik heb tot
            nu toe voornamelijk ervaring met HTML, CSS, NextJS en Tailwind.
            Daarnaast heb ik wat basiskennis van PHP en MySQL. Ik heb een sterke
            voorkeur voor front-end development, maar ik vind het ook zeker leuk
            om te leren over de rest!
          </p>
        </div>

        <div className="flex gap-2 flex-wrap h-fit">
          {tags.data.Tags.length > 0 &&
            tags.data.Tags.map((tag: { Tag: string; id: string }) => {
              return <Tag title={tag.Tag} key={tag.id} />;
            })}
        </div>
      </div>
    </main>
  );
}
