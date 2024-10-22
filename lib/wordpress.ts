/* eslint-disable @typescript-eslint/no-explicit-any */
import querystring from 'query-string'

import {
  Post,
  Page,
  FeaturedMedia,
  Tag,
} from "./wordpress.d";

const baseUrl = process.env.WORDPRESS_URL;

function getUrl(path: string, query?: Record<string, any>) {
    const params = query ? querystring.stringify(query) : null
  
    return `${baseUrl}${path}${params ? `?${params}` : ""}`
}

export async function getAllProjects(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
}): Promise<Post[]> { 
  const url = getUrl("/wp-json/wp/v2/projects", { author: filterParams?.author, tags: filterParams?.tag, categories: filterParams?.category });
  const response = await fetch(url);
  const posts: Post[] = await response.json(); 
  return posts;
}

export async function getProjectBySlug(slug: string): Promise<Post> {
  const url = getUrl("/wp-json/wp/v2/projects", { slug });
  const response = await fetch(url);
  const post: Post[] = await response.json();
  return post[0];
}


export async function getAllPages(): Promise<Page[]> {
  const url = getUrl("/wp-json/wp/v2/pages");
  const response = await fetch(url);
  const pages: Page[] = await response.json();
  return pages;
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const url = getUrl("/wp-json/wp/v2/pages", { slug });
  const response = await fetch(url);
  const page: Page[] = await response.json();
  return page[0];
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);
  const response = await fetch(url);
  const featuredMedia: FeaturedMedia = await response.json();
  return featuredMedia;
}

export async function getAllTags(): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags");
  const response = await fetch(url);
  const tags: Tag[] = await response.json();
  return tags;
}

export async function getTagsByIds(ids: number[]): Promise<Tag[]> {
  const idString = ids.join(','); // Convert array of IDs to a comma-separated string
  const url = getUrl('/wp-json/custom/v1/tags', { ids: idString });
  const response = await fetch(url);
  const tags: Tag[] = await response.json();
  return tags;
}
