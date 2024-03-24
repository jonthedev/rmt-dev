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
import Sorting from "./components/SortingControls/SortingControls"
import JobList from "./components/Features/Job/JobList/JobList"
import Pagination from "./components/PaginationControls/PaginationControls"
import { useDebounce, useJobItems } from "./lib/hooks"
import { Toaster } from "react-hot-toast"

function App() {
  const [searchText, setSearchText] = useState("")
  const debouncedSearchText = useDebounce(searchText, 500)
  const [currentPage, setCurrentPage] = useState(1)

  const [jobItems, isLoading] = useJobItems(debouncedSearchText)

  const totalNumberOfResults = jobItems?.length || 0
  const jobItemsSliced = jobItems?.slice(0, 7) || []

  const handleChangePage = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentPage(prev => prev + 1)
    } else if (direction === "previous") {
      setCurrentPage(prev => {
        return prev <= 1 ? 0 : prev - 1
      })
    }
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
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination onClick={handleChangePage} currentPage={currentPage} />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App
