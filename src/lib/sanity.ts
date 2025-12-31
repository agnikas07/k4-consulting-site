import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = '5iph930v'; 
export const dataset = 'production';
export const apiVersion = '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getCandidateByCategory(category: string) {
  const query = `*[_type == "candidate" && category == $category] | order(_updatedAt desc)[0] {
    name,
    title,
    location,
    availability,
    image,
    "resumeUrl": resume.asset->url,
    bio,
    skills,
    introVideo,
    experience
  }`;

  const params = { category };
  const candidate = await sanityClient.fetch(query, params);

  if (!candidate) return null;

  return {
    ...candidate,
    image: candidate.image ? urlFor(candidate.image).width(800).url() : '/assets/aboutSectionImage.jpg'
  };
}