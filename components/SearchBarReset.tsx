"use client"

import { X } from "lucide-react"
import Link from "next/link"

const SearchBarReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement

    if (form) form.reset()
  }

  return (
    <button type="reset" className="search-btn text-slate-50" onClick={reset}>
      <Link href="/" className="search-btn text-slate-50">
        <X className="size-5" />
      </Link>
    </button>
  )
}
export default SearchBarReset
