import Tag from "@/app/components/tag";
import Image from "next/image";
import {
  getFeaturedMediaById,
  getProjectBySlug,
  getTagsByIds,
} from "@/lib/wordpress";

export default async function projectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);
  const banner = await getFeaturedMediaById(project.featured_media);
  const tags = await getTagsByIds(project.tags);

  return (
    <main className="flex flex-col gap-16 py-10">
      <Image
        src={banner.source_url}
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
        <div className="flex flex-col gap-1 col-span-2 prose prose-invert prose-h2:m-0">
          <div
            className="flex flex-col gap-1"
            dangerouslySetInnerHTML={{
              __html: project.acf.top_content.content,
            }}
          ></div>
        </div>

        <div className="flex gap-2 flex-wrap h-fit">
          {tags.length > 0 &&
            tags.map((tag) => {
              return <Tag title={tag.name} key={tag.id} />;
            })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-20 px-16 items-center">
        {typeof project.acf.middle_content.afbeelding === "number" && (
          <Image
            src={
              (
                await getFeaturedMediaById(
                  project.acf.middle_content.afbeelding
                )
              ).source_url
            }
            alt="project"
            width={0}
            height={0}
            className="w-full rounded-2xl"
            sizes="100vw"
            style={{ objectFit: "cover", height: "250px" }}
          />
        )}

        <div className="flex flex-col gap-1 col-span-2 prose prose-invert prose-h2:m-0">
          <div
            className="flex flex-col gap-1"
            dangerouslySetInnerHTML={{
              __html: project.acf.middle_content.content,
            }}
          ></div>
        </div>
      </div>

      {project.acf.bottom_content.content !== "" &&
        project.acf.bottom_content.afbeelding !== "" && (
          <div className="grid grid-cols-3 gap-20 px-16 items-center">
            <div className="flex flex-col gap-1 col-span-2 prose prose-invert prose-h2:m-0">
              <div
                className="flex flex-col gap-1"
                dangerouslySetInnerHTML={{
                  __html: project.acf.bottom_content.content,
                }}
              ></div>
            </div>

            {typeof project.acf.bottom_content.afbeelding === "number" && (
              <Image
                src={
                  (
                    await getFeaturedMediaById(
                      project.acf.bottom_content.afbeelding
                    )
                  ).source_url
                }
                alt="project"
                width={0}
                height={0}
                className="w-full rounded-2xl"
                sizes="100vw"
                style={{ objectFit: "cover", height: "250px" }}
              />
            )}
          </div>
        )}
    </main>
  );
}
