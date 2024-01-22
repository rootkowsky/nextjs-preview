import { draftMode } from 'next/headers';
import React from 'react';
import { fetchPage, fetchPageRevision } from '../../utils'

type Props = {
  params: {
    page: string;
  };
  searchParams: Record<string, string>;
};

export default async function Page(props: Props) {
  const page = await fetchPageData(props);

  return (
    <main>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </main>
  );
}

async function fetchPageData(props: Props) {
  const slug = props.params.page;

  if (draftMode().isEnabled) {
    /*
     * ‼️ `revision_id` does not exist
     */
    const { revision_id } = props.searchParams;
    return await fetchPageRevision(revision_id);
  }

  return await fetchPage(slug);
}

export const dynamic = 'error';
export const dynamicParams = false;


export async function generateStaticParams() {
  return [
    {
      page: 'foo'
    },
    {
      page: 'bar'
    }
  ];
}
