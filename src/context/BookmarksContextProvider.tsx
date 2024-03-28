import React, { createContext } from "react"
import { useJobItems, useLocalStorage } from "../lib/hooks"
import { JobItemExpanded } from "../lib/types"

type BookmarksContext = {
  bookmarkIds: number[]
  handleToggleBookmark: (id: number) => void
  bookmarkedJobItems: JobItemExpanded[]
  isLoading: boolean
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

  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(bookmarkIds)

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
        handleToggleBookmark,
        bookmarkedJobItems,
        isLoading
      }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
