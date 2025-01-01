import './CherfSection.css'
import chefImg from "../../../public/assets/cherf-section/Group 880.png"
const CherfSection = () => {
  return (
    <>
    <div className="container chef-section">
        <div className="chef-descriptions">
            <h1 className="chef-heading">Every can be a <br/>chef in their own kitchen</h1>
            <p className='chef-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis voluptatem repellat! Numquam voluptatibus quas debitis error, voluptas saepe voluptates! </p>
            <div className="chef-btn">
               <a href="#" className='btn-chef'>Learn More</a>
            </div>
        </div>
        {/* chef image */}
        <div className="chef-image">
            <img src={chefImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default CherfSection