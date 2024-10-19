import Image from "next/image";
import Tag from "../components/tag";
import FotoPebbles from "@/public/pebbles.png";
import { getAllTags } from "@/lib/wordpress";

export default async function About() {
  const tags = await getAllTags();
  return (
    <main className="flex self-center flex-1 justify-center flex-col gap-10 md:gap-24 py-5 px-5 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
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

        <div className="flex flex-col gap-1 md:col-span-2">
          <p className="text-xl font-bold">Hoi ik ben pebl</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
        <div className="flex flex-col gap-1 md:col-span-2">
          <p className="text-xl font-bold">Hoi ik ben pebl</p>
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
          {tags.length > 0 &&
            tags.map((tag) => {
              return <Tag title={tag.name} key={tag.term_id} />;
            })}
        </div>
      </div>
    </main>
  );
}
