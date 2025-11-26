import BookIcon from './icons/book-icon';
import { mediumPosts, type MediumPost } from '@/data/medium-posts';

// Blog card component for Medium posts
function BlogCard({ post }: { post: MediumPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group dark:hover:bg-zinc-800/70 dark:border-zinc-800 border-2 border-zinc-100 hover:border-zinc-200 dark:hover:border-zinc-700 rounded-md py-3 w-full hover:bg-gray-50 transition-all duration-200 flex flex-col px-3"
    >
      <div className="flex flex-row items-center gap-2">
        <BookIcon className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 flex-1">
          <span className="font-bold group-hover:text-black dark:group-hover:text-white">
            {post.title}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-500 italic">
            {post.publishedDate}
          </span>
        </div>
      </div>
    </a>
  );
}

function BlogSection() {
  return (
    <section className="flex flex-col gap-y-2 text-black dark:text-white w-full">
      <div className="mb-2">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight">Blogs</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          I write comedy sketches sometimes
        </p>
      </div>

      {mediumPosts.length > 0 ? (
        <>
          <div className="flex flex-col w-full mt-2 gap-y-2">
            {mediumPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <a
            href="https://medium.com/@hussainsakib44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mt-2 text-sm underline decoration-dotted underline-offset-4"
          >
            View all posts on Medium →
          </a>
        </>
      ) : (
        <div className="text-gray-600 dark:text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-md p-6 text-center">
          Coming soon—check my{' '}
          <a
            href="https://medium.com/@hussainsakib44"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black dark:hover:text-white transition-colors"
          >
            Medium
          </a>{' '}
          for updates.
        </div>
      )}
    </section>
  );
}

export default BlogSection;
