import Categories from "../components/categories/Categories"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import RecipesCategories from "../components/recipes/RecipesCategories"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>
        <RecipesCategories/>
    </div>
  )
}
export default Home