import {Form, redirect, useActionData, useTransition} from 'remix'
import type {ActionFunction} from 'remix'
import {createPost} from '~/post'

export const action: ActionFunction = async ({request}) => {
  await new Promise((res) => setTimeout(res, 2000))
  const formData: FormData = await request.formData()

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const markdown = formData.get('markdown') as string

  const errors: {title?: boolean; slug?: boolean; markdown?: boolean} = {}
  if (!title) errors.title = true
  if (!slug) errors.slug = true
  if (!markdown) errors.markdown = true

  if (Object.keys(errors).length) {
    return errors
  }

  await createPost({title, slug, markdown})

  return redirect('/admin')
}

function NewPost() {
  const errors = useActionData()
  const transition = useTransition()

  return (
    <Form method="post">
      <p>
        <label htmlFor="name">
          Post Title: {errors?.title && <em>Title is required</em>}
          <input id="name" type="text" name="title" />
        </label>
      </p>
      <p>
        <label htmlFor="slug">
          Post Slug: {errors?.slug && <em>Slug is required</em>}
          <input id="slug" type="text" name="slug" />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{' '}
        {errors?.markdown && <em>Markdown is required</em>}
        <br />
        <textarea id="markdown" rows={20} name="markdown" />
      </p>
      <p>
        <button type="submit">{transition.submission ? 'Creating...' : 'Create Post'}</button>
      </p>
    </Form>
  )
}

export default NewPost
