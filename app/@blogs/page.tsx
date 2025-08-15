import Link from 'next/link';
import { blogs } from '@/constants/blogs';

export default function Blogs() {
  return (
    <div
      className="container mx-auto max-w-[1100px] scroll-m-24 py-10"
      id="blogs"
    >
      <h2 className="mb-2 text-center text-4xl font-semibold">Blog Posts</h2>
      <p className="mb-10 text-center text-textLight-400">
        Thoughts on technology, problem-solving, and building communities.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {blogs.map(({ title, date, readTime, tags, excerpt, url }) => (
          <div key={title} className="shadow-md rounded-md bg-bgBlack-400 p-6">
            <h3 className="text-lg font-semibold">{title}</h3>

            <div className="mb-3 mt-2 flex flex-wrap gap-4 text-xs text-textLight-400">
              <span>{date}</span>
              <span>{readTime}</span>
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-accent-400 bg-opacity-30 px-2 py-1 text-xs text-accent-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mb-4 text-textLight-400">{excerpt}</p>

            <Link
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block rounded-sm border border-accent-400 px-4 py-2 text-accent-400 transition-transform duration-200 hover:scale-95"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
