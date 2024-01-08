import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-post"

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

function HomePage() {
    return <Fragment>
        <Hero />
        <FeaturedPosts posts={dummy}/>
    </Fragment>
}

export default HomePage