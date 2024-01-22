export default async function Page({ params }: { params: { slug: string } }) {
  const anime = fetch("https://vidsrc.to/embed/tv/tt18382028/1/5")
  return(
  <>
    <div>My Post: {params.slug}</div>
    <iframe src={anime} frameborder="0"></iframe>

 </>
)}
