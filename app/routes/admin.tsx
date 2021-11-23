import {Link, Outlet, useLoaderData} from 'remix'
import {getPosts} from '~/post'
import type {LoaderWithParams} from '~/types'
import type {Post} from '~/post'

import adminStyles from '~/styles/admin.css'

export const links = () => {
  return [{rel: 'stylesheet', href: adminStyles}]
}

export const loader: LoaderWithParams<Record<string, unknown>> = () => {
  return getPosts()
}

function Admin() {
  const posts = useLoaderData<Post[]>()

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Admin
