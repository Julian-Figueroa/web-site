import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { Page } from '@/types/Page';
import config from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  const client = createClient(config);

  const data = await client.fetch(groq`
  *[_type == "Project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`);

  return data;
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(config);

  const data = await client.fetch(
    groq`
  *[_type == "Project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`,
    { slug }
  );

  return data;
}

export async function getPages(): Promise<Page[]> {
  const client = createClient(config);

  const data = await client.fetch(groq`
  *[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`);

  return data;
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient(config);

  const data = await client.fetch(
    groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
    { slug }
  );

  return data;
}
