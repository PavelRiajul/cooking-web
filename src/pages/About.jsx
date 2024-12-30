import Footer from "../components/footer/Footer"
import Inbox from "../components/inbox-section/Inbox"
import Navbar from "../components/Navbar/Navbar"
import SingLineRecipeCards from "../components/single-line-recipe-cards/ SingLineRecipeCards"


const About = () => {
  return (
    <div>
      <Navbar/>
      <Inbox/>
      <SingLineRecipeCards/>
      <Footer/>
    </div>
  )
}

export default About