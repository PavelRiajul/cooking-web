import "./Inbox.css"

const Inbox = () => {
  return (
    <>
    <div className="container inbox-section">
    <div className="recipes-headings">
        <h1 className="recipe-heading">Deliciousness to your inbox</h1>
        <p className="recipe-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium veniam sint eaque? Quos ex atque, impedit unde reiciendis optio?</p>
        </div>
        {/* search-input */}
        <div className="search-input">
           <input className="input-search" type="text" placeholder="Your email address..." />
           <button className="search-btn"><a href="#">Subscribe</a></button>
        </div>
    </div>
    </>
  )
}

export default Inbox