import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1>Next.js</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/portfolio/1">Portfolio Project 1</Link>
        </li>
        <li>
          <Link href="/portfolio/2">Portfolio Project 2</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog/first-blog-post/something/nothing">First Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage