import { BASE_URL } from '@/config/environment';
import { projects } from '@/constants/projects';
import getSlugFromString from '@/utils/getSlugFromString';
import { MetadataRoute } from 'next';

const projectsRoutes = projects.map((project) => ({
  url: `${BASE_URL}/project/${getSlugFromString(project.title)}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/education`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectsRoutes,
  ];
}
