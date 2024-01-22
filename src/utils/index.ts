export const fetchPage = async (slug: string) => {
  return {
    id: slug,
    title: `Page ${slug}`,
    content: `Content ${slug}`,
    slug: slug
  }
}

export const fetchPageLatestRevision = async (slug:string) => {
  const revisionId = randomIntFromInterval(0,99).toString();
  return {
    id: revisionId,
    title: `Page (revision ${revisionId})`,
    content: `Content (revision ${revisionId})`,
    slug: slug
  }
}


export const fetchPageRevision = async (revisionId: string) => {
  return {
    id: revisionId,
    title: `Page (revision ${revisionId})`,
    content: `Content (revision ${revisionId})`,
    slug: revisionId
  }
}


function randomIntFromInterval(min:number, max:number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
