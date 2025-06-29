import { strapi } from "@strapi/client";

const client = strapi({
  baseURL: process.env.STRAPI_URL!,
  auth: process.env.STRAPI_TOKEN,
});

const projects = client.collection("projects");

export const getAllProjects = async () => {
  const allProjects = await projects.find({ populate: "*" });
  return allProjects;
};
