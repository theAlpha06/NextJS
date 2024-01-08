import AllPosts from "../../components/posts/all-posts";
const dummy = [
  {
    title: 'NextJS',
    slug: 'getting-started-with-nextjs',
    image: 'nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack...',
    date: '2022-02-10'
  },
  {
    title: 'NextJS',
    slug: 'getting-started-with-nextjs2',
    image: 'nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack...',
    date: '2022-02-10'
  },
  {
    title: 'NextJS',
    slug: 'getting-started-with-nextjs3',
    image: 'nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack...',
    date: '2022-02-10'
  },
  {
    title: 'NextJS',
    slug: 'getting-started-with-nextjs4',
    image: 'nextjs.png',
    excerpt: 'NextJS is the React framework for production - it makes building fullstack...',
    date: '2022-02-10'
  },
]
function AllPostsPage() {
  return <AllPosts posts={dummy} />
}

export default AllPostsPage;