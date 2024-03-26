import { createContext } from "react"
import { useLocalStorage } from "../lib/hooks"

export const BookmarksContext = createContext(null)

export const BookmarksContextProvider = ({ children }) => {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage("bookmarkedIds", [])

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
