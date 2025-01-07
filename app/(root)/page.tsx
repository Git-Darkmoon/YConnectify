import StartupCard from "@components/StartupCard"
import SearchBar from "@components/SearchBar"

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) => {
  const { query } = await searchParams

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Pepe el Grillo" },
      _id: "1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      image:
        "https://150785984.v2.pressablecdn.com/wp-content/uploads/2025/01/nvidia-geforce-50-series.webp",
      category: "Technology",
      title: "Nvidia 5000 series released",
    },
  ]

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
