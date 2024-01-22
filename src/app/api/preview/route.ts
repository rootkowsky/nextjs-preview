import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { fetchPage, fetchPageLatestRevision } from '../../../utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return new Response('slug is required', { status: 401 });
  }

  const page = await fetchPage(slug);

  if (!page) {
    return new Response('Invalid slug', { status: 401 });
  }

  const revision = await fetchPageLatestRevision(page.slug);

  draftMode().enable();

  redirect(`/${page.slug}?revision_id=${revision.id}`);
}
