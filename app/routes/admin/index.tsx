import {Link} from 'remix'

function AdminIndex() {
  return (
    <p>
      <Link to="new">Create New Post</Link>
    </p>
  )
}

export default AdminIndex
