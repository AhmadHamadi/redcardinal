export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  image: string;
  category: string;
  author: string;
  toc: { id: string; label: string }[];
  /** React node rendered as article body */
  content: () => React.ReactNode;
};

import { POST_BECOME_PILOT } from './posts/become-private-pilot-virginia';
import { POST_DISCOVERY } from './posts/discovery-flight-what-to-expect';
import { POST_SFRA } from './posts/why-train-outside-dc-sfra';

export const POSTS: BlogPost[] = [POST_BECOME_PILOT, POST_DISCOVERY, POST_SFRA];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
