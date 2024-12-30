import BlogPost from "../components/blogPosts/BlogPost"
import Footer from "../components/footer/Footer"
import Inbox from "../components/inbox-section/Inbox"
import Navbar from "../components/Navbar/Navbar"
import SingleLineRecipeCards from "../components/single-line-recipe-cards/ SingLineRecipeCards"

const Recipes = () => {
  return (
    <div>
      <Navbar/>
      <BlogPost/>
      <Inbox/>
      <SingleLineRecipeCards/>
      <Footer/>
    </div>
  )
}

export default Recipes