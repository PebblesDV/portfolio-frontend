import Tag from "@/app/components/tag";
import Image from "next/image";

export default function projectDetail() {
  return (
    <main className="flex flex-col gap-16 py-10">
      <Image
        src="/code.webp"
        alt="banner"
        width={0}
        height={0}
        className="rounded-2xl w-full"
        sizes="100vw"
        style={{
          objectFit: "cover",
          height: "300px",
        }}
      />

      <div className="grid grid-cols-3 gap-20 px-16 items-center">
        <div className="flex flex-col gap-1 col-span-2">
          <p className="text-2xl font-bold">Hallo dit is de uitleg</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            quia nobis quo, ea veritatis earum, deserunt eos beatae voluptate
            ipsum temporibus! Reiciendis odio minus at hic facere aliquid cumque
            totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tempora quia nobis quo, ea veritatis earum, deserunt eos beatae
            voluptate ipsum temporibus! Reiciendis odio minus at hic facere
            aliquid cumque totam!
          </p>
        </div>

        <div className="flex gap-2 flex-wrap h-fit">
          <Tag title="TESTEN" />
          <Tag title="NOG EENTJE" />
          <Tag title="BIEP" />
          <Tag title="IK WEET HET NIET" />
          <Tag title="YIPPEE" />
          <Tag title="BAL" />
          <Tag title="BLOEP" />
          <Tag title="HUPLAKEE" />
          <Tag title="PATAT" />
          <Tag title="JA DOE NOG MAAR EENTJE" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-20 px-16 items-center">
        <Image
          src="/code.webp"
          alt="project"
          width={0}
          height={0}
          className="w-full rounded-2xl"
          sizes="100vw"
          style={{ objectFit: "cover", height: "250px" }}
        />

        <div className="flex flex-col gap-1 col-span-2">
          <p className="text-2xl font-bold">Hallo dit is de uitleg</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            quia nobis quo, ea veritatis earum, deserunt eos beatae voluptate
            ipsum temporibus! Reiciendis odio minus at hic facere aliquid cumque
            totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tempora quia nobis quo, ea veritatis earum, deserunt eos beatae
            voluptate ipsum temporibus! Reiciendis odio minus at hic facere
            aliquid cumque totam!
          </p>
        </div>
      </div>
    </main>
  );
}

// import { getProjectBySlug } from "@/lib/wordpress";

// export default async function ProjectDetail({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const project = await getProjectBySlug(params.slug);

//   return (
//     <div
//       className="prose"
//       dangerouslySetInnerHTML={{ __html: project.content.rendered }}
//     ></div>
//   );
// }
