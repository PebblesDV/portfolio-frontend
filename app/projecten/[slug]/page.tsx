import { getProjectBySlug } from "@/lib/wordpress";

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  return <div>project: {project.content.rendered}</div>;
}
