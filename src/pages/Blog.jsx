import BlogArticle from "../components/blogs/BlogArticle"
import Footer from "../components/footer/Footer"
import Inbox from "../components/inbox-section/Inbox"
import Navbar from "../components/Navbar/Navbar"


const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogArticle/>
      <Inbox/>
      <Footer/>
    </div>
  )
}

export default Blog