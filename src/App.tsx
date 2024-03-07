import { useState, useEffect } from "react"
import Container from "./components/Layout/Container/Container"
import Footer from "./components/Layout/Footer/Footer"
import Header from "./components/Layout/Header/Header"
import { Background } from "./components/SVGR/Background/Background"
import { BASE_API_URL } from "./lib/consts"

function App() {
  const [searchText, setSearchText] = useState("")
  const [jobItems, setJobItems] = useState([])

  useEffect(() => {
    if (!searchText) return

    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`)
      const data = await response.json()
      setJobItems(data.jobItems)
    }
    fetchData()
  }, [searchText])

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobItems={jobItems} />
      <Footer />
    </>
  )
}

export default App
