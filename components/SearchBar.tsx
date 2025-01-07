import Form from "next/form"
import SearchBarReset from "./SearchBarReset"
import { Search } from "lucide-react"

const SearchBar = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        className="search-input"
        defaultValue={query}
        placeholder="Search for startups"
        required
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        aria-label="Search for startups"
        aria-autocomplete="none"
        aria-required
        maxLength={45}
        role="searchbox"
        minLength={2}
      />
      <div className="flex gap-2">
        {query && <SearchBarReset />}

        <button type="submit" className="search-btn text-slate-50">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  )
}
export default SearchBar
