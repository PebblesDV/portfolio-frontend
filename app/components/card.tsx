import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="grid grid-cols-2 gap-7">
      <Link href={"/"}>
        <div className="w-full rounded-t-2xl">
          <Image
            src="/code.webp"
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
          />
        </div>

        <div className="bg-cards rounded-b-2xl flex justify-between px-5 py-2">
          <p className="text-lg font-medium">Projecten</p>
          <Image src="/arrow-right.svg" width={20} height={20} alt="arrow" />
        </div>
      </Link>
    </div>
  );
}
