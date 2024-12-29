import Categories from "../components/categories/Categories"
import CherfSection from "../components/cherf-section/CherfSection"
import Footer from "../components/footer/Footer"
import Hero from "../components/Hero/Hero"
import Inbox from "../components/inbox-section/Inbox"
import InstaRecipes from "../components/instagram-recipes/InstaRecipes"
import Navbar from "../components/Navbar/Navbar"
import RecipesCards from "../components/recipes-cards/RecipesCards"
import RecipesCategories from "../components/recipes/RecipesCategories"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>
        <RecipesCategories/>
        <CherfSection/>
        <InstaRecipes/>
        <RecipesCards/>
        <Inbox/>
        <Footer/>
    </div>
  )
}
export default Home