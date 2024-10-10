import Image from "next/image";
import Tag from "../components/tag";

export default async function About() {
  return (
    <main className="flex self-center flex-1 justify-center flex-col gap-24 py-5 px-32">
      {/* <div className="flex items-center justify-center gap-10">
        <Image
          src="/pebbles.png"
          alt="pebbles"
          width={0}
          height={0}
          className="rounded-full flex self-center"
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "220px",
            height: "220px",
          }}
        />

        <div className="flex flex-col">
          <p className="font-bold text-2xl">Hallo</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            veritatis ea perferendis voluptatem alias nulla ex eos quas, vero
            consectetur, autem maxime. Sit quibusdam laudantium quam totam quos
            iste est.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 items-baseline">
        <div className="flex flex-col col-span-2">
          <p className="font-bold text-2xl">Test</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            officiis fugit modi vero molestias distinctio perferendis
            repudiandae numquam aliquam ex possimus cupiditate ipsum quis
            sapiente veritatis culpa temporibus, adipisci mollitia!
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
      </div> */}

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

      <div className="grid grid-cols-3 gap-20 items-center">
        <Image
          src="/pebbles.png"
          alt="pebbles"
          width={0}
          height={0}
          className="rounded-full self-center"
          sizes="100vw"
          style={{ objectFit: "cover", height: "250px", width: "250px" }}
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
    </main>
  );
}
