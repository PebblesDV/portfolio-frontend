import Image from "next/image";
import Tag from "../components/tag";
import FotoPebbles from "@/public/pebbles.png";

export default async function About() {
  return (
    <main className="flex self-center flex-1 justify-center flex-col gap-24 py-5 px-32">
      <div className="grid grid-cols-3 gap-20 items-center">
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

        <div className="flex flex-col gap-1 col-span-2">
          <p className="text-2xl font-bold">Hoi ik ben pebl</p>
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

      <div className="grid grid-cols-3 gap-20 items-center">
        <div className="flex flex-col gap-1 col-span-2">
          <p className="text-2xl font-bold">Hoi ik ben pebl</p>
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
    </main>
  );
}
