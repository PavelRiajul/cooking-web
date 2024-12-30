import Footer from "../components/footer/Footer"
import Inbox from "../components/inbox-section/Inbox"
import Navbar from "../components/Navbar/Navbar"
import SingleLineRecipeCards from "../components/single-line-recipe-cards/ SingLineRecipeCards"

const Recipes = () => {
  return (
    <div>
      <Navbar/>
      <Inbox/>
      <SingleLineRecipeCards/>
      <Footer/>
    </div>
  )
}

export default Recipes