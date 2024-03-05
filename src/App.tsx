import Container from "./components/Layout/Container/Container"
import Footer from "./components/Layout/Footer/Footer"
import Header from "./components/Layout/Header/Header"
import { Background } from "./components/SVGR/Background/Background"

function App() {
  return (
    <>
      <Background />
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
