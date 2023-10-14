import LandingPageGrid from "../LandingPageGrid"
// import LoginPage from "../Login";
import Footer from "../../components/Admin_GridFooter";
import Header from "../../components/Admin_GridHeader"
import { useRef } from "react"

const LandingPage = () => {
  //ref the login
  const login = useRef(null)

  //handle scroll
  const handleScroll = elmRef => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" })
  }

  return (
    <>
      <Header/>
      {/* <LoginPage ref={login}/> */}
      <LandingPageGrid ref={login} />
      
      <Footer />
    </>
  )
}

export default LandingPage
