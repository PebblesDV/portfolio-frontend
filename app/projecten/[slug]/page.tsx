import Image from "next/image";
import { Metadata } from "next";
import { getFullImageUrl, getProjectById } from "@/lib/strapi";
import Tag from "@/app/components/tag";
import clsx from "clsx";

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Pebbles de Vries - Project",
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

export default async function projectDetail({
  params,
}: {
  params: { slug: string };
}) {
  // const project = await getProjectBySlug(params.slug);
  // const banner = await getFeaturedMediaById(project.featured_media);
  // const tags = await getTagsByIds(project.tags);

  const project = await getProjectById(params.slug);
  console.log(project.data.TextBlock[0]);

  return (
    <main className="flex flex-col gap-10 lg:gap-16 py-10 flex-1 justify-center">
      <div className="w-full h-52 lg:h-[300px] relative">
        <Image
          src={getFullImageUrl(project.data.Banner.url)}
          alt="banner"
          width={0}
          height={0}
          className="rounded-2xl w-full object-cover object-left"
          sizes="100vw"
          fill
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 px-5 lg:px-16 items-center">
        <div className="flex flex-col gap-1 lg:col-span-2 prose prose-invert prose-h2:m-0">
          <div className="flex flex-col gap-1">
            <h2>{project.data.TextBlock[0].Title}</h2>
            <p>{project.data.TextBlock[0].Description}</p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap h-fit">
          {project.data.Tag.length > 0 &&
            project.data.Tag.map((tag: { Tag: string; id: string }) => {
              return <Tag title={tag.Tag} key={tag.id} />;
            })}
        </div>
      </div>

      {project.data.TextBlock.length > 1 &&
        project.data.TextBlock.slice(1).map(
          (
            item: {
              id: string;
              Title: string;
              Description: string;
              Image: { url: string } | null;
            },
            index: number
          ) => {
            const isEven = index % 2 == 0;

            return (
              <div
                key={item.id}
                className={
                  "grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 px-5 lg:px-16 items-center"
                }
              >
                {item.Image && (
                  <Image
                    src={getFullImageUrl(item.Image.url)}
                    alt="project"
                    width={0}
                    height={0}
                    className="w-full rounded-2xl"
                    sizes="100vw"
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                )}

                <div
                  className={clsx(
                    "flex flex-col gap-1 lg:col-span-2 prose prose-invert prose-h2:m-0",
                    !isEven && "-order-1"
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <h2>{item.Title}</h2>
                    <p>{item.Description}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </main>
  );
}
