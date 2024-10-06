import { getProjectBySlug } from "@/lib/wordpress";

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  console.log(project.featured_media);

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: project.content.rendered }}
    ></div>
  );
}
