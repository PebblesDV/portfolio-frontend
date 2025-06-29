import { strapi } from "@strapi/client";

const client = strapi({
  baseURL: process.env.STRAPI_URL! + "/api",
  auth: process.env.STRAPI_TOKEN,
});

export const getFullImageUrl = (path: string) => {
  return process.env.STRAPI_URL + path;
};

const projects = client.collection("projects");

export const getAllProjects = async () => {
  const allProjects = await projects.find({ populate: "*" });
  return allProjects;
};

export const getProjectById = async (documentId: string) => {
  const project = await projects.findOne(documentId, {
    populate: {
      Cover: true,
      Banner: true,
      Tag: true,
      TextBlock: {
        populate: {
          Image: true,
        },
      },
    },
  });
  return project;
};
