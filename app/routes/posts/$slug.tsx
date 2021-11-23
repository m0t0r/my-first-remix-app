import {useLoaderData} from 'remix'
import {getPost} from '~/post'
import type {LoaderWithParams} from '~/types'

export const loader: LoaderWithParams<{slug: string}> = ({params}) => {
  return getPost(params.slug)
}

function Post() {
  const post = useLoaderData()
  return <div dangerouslySetInnerHTML={{__html: post.html}} />
}

export default Post
