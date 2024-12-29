import './CherfSection.css'

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
            <img src="/src/assets/cherf-section/Group 880.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default CherfSection