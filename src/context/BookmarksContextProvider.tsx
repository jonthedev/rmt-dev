import { useState, createContext, useEffect } from "react"

export const BookmarksContext = createContext(null)

export const BookmarksContextProvider = ({ children }) => {
  const [bookmarkIds, setBookmarkIds] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem("bookmarkedIds") || "[]")
  )

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds(prev => prev.filter(item => item !== id))
    } else {
      setBookmarkIds(prev => [...prev, id])
    }
  }

  useEffect(() => {
    localStorage.setItem("bookmarkedIds", JSON.stringify(bookmarkIds))
  }, [bookmarkIds])

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
