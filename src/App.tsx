import { useState } from "react"
import Container from "./components/Layout/Container/Container"
import Footer from "./components/Layout/Footer/Footer"
import Header, { HeaderTop } from "./components/Layout/Header/Header"
import { Background } from "./components/SVGR/Background/Background"
import BookmarksButton from "./components/Features/Bookmark/BookmarksButton/BookmarksButton"
import { Logo } from "./components/SVGR/Logo/Logo"
import SearchForm from "./components/SearchForm/SearchForm"
import JobItemContent from "./components/Features/Job/JobItemContent/JobItemContent"
import Sidebar, { SidebarTop } from "./components/Layout/Sidebar/Sidebar"
import ResultsCount from "./components/ResultsCount/ResultsCount"
import SortingControls from "./components/SortingControls/SortingControls"
import JobList from "./components/Features/Job/JobList/JobList"
import Pagination from "./components/PaginationControls/PaginationControls"
import { useDebounce, useSearchQuery } from "./lib/hooks"
import { Toaster } from "react-hot-toast"
import { RESULTS_PER_PAGE } from "./lib/consts"
import { type PageDirections, type SortBy } from "./lib/types"

function App() {
  const [searchText, setSearchText] = useState("")
  const debouncedSearchText = useDebounce(searchText, 500)
  const [currentPage, setCurrentPage] = useState(1)
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText)
  const [sortBy, setSortBy] = useState<SortBy>("relevant")
  const totalNumberOfResults = jobItems?.length || 0
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore
    } else {
      return a.daysAgo - b.daysAgo
    }
  })

  const jobItemsSortedAndSliced = jobItemsSorted.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )

  const handleChangePage = (direction: PageDirections) => {
    if (direction === "next") {
      setCurrentPage(prev => prev + 1)
    } else if (direction === "previous") {
      setCurrentPage(prev => {
        return prev <= 1 ? 0 : prev - 1
      })
    }
  }

  const handleChangeSortBy = (newSortBy: SortBy) => {
    setSortBy(newSortBy)
    setCurrentPage(1)
  }

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls
              sortBy={sortBy}
              handleChangeSortBy={handleChangeSortBy}
            />
          </SidebarTop>
          <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />
          <Pagination
            onClick={handleChangePage}
            currentPage={currentPage}
            totalNumberOfPages={totalNumberOfPages}
          />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App
