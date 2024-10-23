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
  return (
    <Link href={href} className="drop-shadow-custom-gray group">
      <div className="w-full lg:h-64 rounded-t-2xl overflow-hidden object-cover">
        <Image
          src={imageSrc}
          alt="card-img"
          width={0}
          height={0}
          className="lg:group-hover:scale-105 transition duration-200"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="bg-cards rounded-b-2xl px-5 py-2">
        <div className="flex justify-between">
          <p className="text-lg font-medium">{title}</p>
          <Image
            src="/arrow-right.svg"
            width={20}
            height={20}
            alt="arrow"
            className="lg:group-hover:-rotate-45 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  );
}
