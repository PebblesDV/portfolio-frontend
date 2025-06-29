import { Metadata } from "next";
import Card from "../components/card";
import { getAllProjects, getFullImageUrl } from "@/lib/strapi";

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
  const projects = await getAllProjects();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 py-12">
      {projects.data.length > 0 &&
        projects.data.map(async (project) => {
          return (
            <Card
              imageSrc={getFullImageUrl(project.Cover.url)}
              key={project.documentId}
              title={project.Title}
              href={`/projecten/${project.documentId}`}
            />
          );
        })}
    </div>
  );
}
