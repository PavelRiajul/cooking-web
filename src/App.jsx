import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import About from "./pages/About"
import BlogPost from "./components/blogPosts/BlogPost"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogPost" element={<BlogPost/>}/>
      </Routes>
    </div>
  )
}
export default App