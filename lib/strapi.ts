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
