import {Link, useLoaderData} from 'remix'
import {getPosts} from '~/post'
import type {LoaderFunction} from 'remix'
import type {Post} from '~/post'

export const loader: LoaderFunction = () => {
  return getPosts()
}

function Posts() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
