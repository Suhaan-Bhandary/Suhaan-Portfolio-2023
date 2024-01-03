import slugify from 'slugify';

export default function getSlugFromString(inputString: string) {
  return slugify(inputString, { lower: true });
}
