import "./Form.css"

const Form = () => {
  return (
    <>
    <div className="container main-contact-form">
    <div className="recipes-headings">
            <h1 className="recipe-heading" id="contact-heading">Contact us</h1>
          
         </div>
    <div className=" contact-form">
        <div className="contact-image">
            <img src="/src/assets/contact-img/Group 13936.png" alt="" />
        </div>
        <div className="form-section">
            <form>
                <div className="form-1">
                <labe className="block" htmlFor="name">NAME</labe>
                <input type="text" name="name" id="name" placeholder="Enter your name..."/>
                
                <labe className="block" htmlFor="email">EMAIL ADDRESS</labe>
                <input type="text" name="email" id="email" placeholder="Your Email address..."/>
                </div>
                
               <div className="form-2">
               <labe className="block" htmlFor="subject">SUBJECT</labe>
                <input type="text" name="subject" id="subject" placeholder="Enter subject..."/>

                <labe className="block" htmlFor="ENQUIRY TYPE">ENQUIRY TYPE</labe>
                <input type="search" name="enquiry type" id="ENQUIRY TYPE" placeholder="Advertising"/>
               </div>
                     
            </form>
            <label className="block" htmlFor="messages">MESSAGES</label>
                     <textarea name="messages" id="messages" rows="9" cols="88" placeholder="enter your messages..."></textarea>
                <div className="sub-btn">
                    <button className="btn-sub" type="submit">Submit </button>
                </div>
        </div>
    </div>
    </div>
     
    </>
   
  )
}

export default Form