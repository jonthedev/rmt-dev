import React, { createContext } from "react"
import { useLocalStorage } from "../lib/hooks"

type BookmarksContext = {
  bookmarkIds: number[]
  handleToggleBookmark: (id: number) => void
}

export const BookmarksContext = createContext<BookmarksContext | null>(null)

export const BookmarksContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  )

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds(prev => prev.filter(item => item !== id))
    } else {
      setBookmarkIds(prev => [...prev, id])
    }
  }

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkIds,
        handleToggleBookmark
      }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
