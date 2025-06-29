import {
  getAllProjects as oldGetAllProjects,
  getFeaturedMediaById,
} from "@/lib/wordpress";
import { Metadata } from "next";
import Card from "../components/card";
import FallBackImage from "@/public/code.webp";
import { getAllProjects } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Pebbles de Vries - Projecten",
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

export default async function Projects() {
  const oldProjects = await oldGetAllProjects();
  const projects = await getAllProjects();

  console.log(JSON.stringify(projects, null, 2));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 py-12">
      {oldProjects.length > 0 &&
        oldProjects.map(async (project) => {
          const media =
            project && project.acf && project.acf.card_image
              ? typeof project.acf.card_image === "string"
                ? FallBackImage
                : (await getFeaturedMediaById(project.acf.card_image))
                    .source_url
              : FallBackImage;
          return (
            <Card
              imageSrc={media}
              key={project.id}
              title={project.title.rendered}
              href={`/projecten/${project.slug}`}
            />
          );
        })}
    </div>
  );
}
