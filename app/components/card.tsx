import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// import CardFoto from "@/public/code.webp";

export default async function Card({
  title,
  href,
  imageSrc,
}: {
  title: string;
  href: string;
  imageSrc: string | StaticImageData;
}) {
  console.log("image src:", imageSrc);

  return (
    <Link href={href} className="drop-shadow-custom-gray group">
      <div className="w-full rounded-t-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt="card-img"
          width={0}
          height={0}
          className="group-hover:scale-105 transition duration-200"
          sizes="100vw"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px 20px 0px 0px",
          }}
        />

        {/* <Image
          src={CardFoto}
          width={0}
          height={0}
          alt="card-img"
          sizes="100vw"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px 20px 0px 0px",
          }}
          className="group-hover:scale-105 transition duration-200"
          placeholder="blur"
        /> */}
      </div>

      <div className="bg-cards rounded-b-2xl px-5 py-2">
        <div className="flex justify-between">
          <p className="text-lg font-medium">{title}</p>
          <Image
            src="/arrow-right.svg"
            width={20}
            height={20}
            alt="arrow"
            className="group-hover:-rotate-45 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  );
}
