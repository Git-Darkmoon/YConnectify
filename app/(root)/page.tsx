import SearchBar from "@components/SearchBar"

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) => {
  const { query } = await searchParams

  return (
    <>
      <section className="pink_container">
        <h1 className="heading capitalize">
          Pitch your startup, <br /> Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl capitalize">
          Submit ideas, vote on pitches, and get noticed in virtual
        </p>
        <SearchBar query={query} />
      </section>
    </>
  )
}
export default Home
