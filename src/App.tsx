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
import { useJobItems } from "./lib/hooks"

function App() {
  const [searchText, setSearchText] = useState("")
  const [jobItems, isLoading] = useJobItems(searchText)

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
            <ResultsCount />
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  )
}

export default App
