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
import Pagination from "./components/PaginationControls/PaginationControls"
import { Toaster } from "react-hot-toast"
import JobListSearch from "./components/Features/Job/JobListSearch/JobListSearch"

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobListSearch />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  )
}

export default App
