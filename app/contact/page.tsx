import Link from "next/link";
import Image from "next/image";
import FotoPebbles from "@/public/pebbles.jpeg";

const links = [
  {
    social: "pebblesdevries@gmail.com",
    href: "mailto:pebblesdevries@gmail.com",
    image: "/mail.svg",
  },
  {
    social: "+31 6 50 87 80 66",
    href: "tel:+31650878066",
    image: "/phone.svg",
  },
];

export default async function Contact() {
  return (
    <main className="flex flex-col lg:flex-row gap-14 lg:gap-24 items-center justify-center flex-1 py-10">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl lg:text-2xl font-bold">Get in touch!</p>
        <div className="text-center text-sm lg:text-base">
          <p>Meer weten over mij en wat ik doe?</p>
          <p>Neem contact met mij op!</p>
        </div>

        <Link
          href={"https://www.linkedin.com/in/pebbles-de-vries-999550292/"}
          target="_blank"
          className="bg-primary text-sm lg:text-base px-6 py-1 w-fit rounded-2xl drop-shadow-custom-blue self-center hover:bg-primaryHover active:scale-90 transition duration-200 font-semibold"
        >
          LinkedIn
        </Link>
      </div>

      <div className="flex flex-col items-center bg-cards px-5 lg:px-12 py-4 lg:py-6 rounded-2xl gap-6 drop-shadow-custom-gray">
        <Image
          src={FotoPebbles}
          alt="pebbles"
          width={0}
          height={0}
          className="rounded-full"
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "180px",
            height: "180px",
          }}
          placeholder="blur"
        />

        <div className="flex flex-col gap-2">
          {links.map((link) => {
            return (
              <Link
                key={link.social}
                href={link.href}
                className="flex text-sm lg:text-base gap-3 group border-b border-transparent hover:border-white transition duration-200 w-fit"
              >
                <Image
                  src={link.image}
                  alt="mail"
                  width={20}
                  height={20}
                  className="group-hover:animate-jump"
                />
                <p>{link.social}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
