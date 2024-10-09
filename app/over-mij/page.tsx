import Image from "next/image";

export default async function About() {
  return (
    <main>
      <div className="flex items-center justify-center gap-10">
        <Image
          src="/pebbles.png"
          alt="pebbles"
          width={0}
          height={0}
          className="rounded-full flex self-center"
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "250px",
            height: "250px",
          }}
        />

        <div className="flex flex-col w-2/4">
          <p className="font-bold text-2xl">Hallo</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            veritatis ea perferendis voluptatem alias nulla ex eos quas, vero
            consectetur, autem maxime. Sit quibusdam laudantium quam totam quos
            iste est.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <p>Test</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            officiis fugit modi vero molestias distinctio perferendis
            repudiandae numquam aliquam ex possimus cupiditate ipsum quis
            sapiente veritatis culpa temporibus, adipisci mollitia!
          </p>
        </div>

        <div className="flex flex-col">
          <p>Test</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            similique assumenda voluptatem ab corrupti quidem nihil. Accusantium
            tempore quidem error blanditiis, aut provident facilis a distinctio.
            Illum provident alias odit!
          </p>
        </div>
      </div>
    </main>
  );
}
