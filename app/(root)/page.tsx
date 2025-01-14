import StartupCard, { StartupCardType } from "@components/StartupCard"
import SearchBar from "@components/SearchBar"
import { client } from "@/sanity/lib/client"
import { STARTUPS_QUERY } from "@/sanity/lib/queries"

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) => {
  const { query } = await searchParams

  const posts = await client.fetch(STARTUPS_QUERY)

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

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => {
              return <StartupCard key={post?._id} post={post} />
            })
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}
export default Home
