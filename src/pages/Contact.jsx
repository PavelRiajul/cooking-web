import Form from "../components/contact/Form"
import Footer from "../components/footer/Footer"
import Inbox from "../components/inbox-section/Inbox"
import Navbar from "../components/Navbar/Navbar"
import SingLineRecipeCards from "../components/single-line-recipe-cards/ SingLineRecipeCards"


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Inbox/>
      <SingLineRecipeCards/>
      <Footer/>
    </div>
  )
}

export default Contact