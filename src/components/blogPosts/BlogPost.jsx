import "./BlogPost.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
const BlogPost = () => {
  return (
    <>
    <div className="container blogPosts">
        <h2 className="blog-post-heading">Full Guide Becoming a Professional Chef</h2>
        <div className="ellips-dates" id="date-ellips">
                    <div className="ellips">
                        <img src="/src/assets/blog-post/Ellipse 2.png" alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
                <h5 className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur voluptatum dignissimos voluptatem voluptatibus optio asperiores pariatur at, possimus labore animi ipsa perspiciatis atque adipisci veniam neque nihil quos ipsum dicta?</h5>

                <div id="chef-image">
                  <img src="/src/assets/blog-post/image 29.png" alt="" />
                </div>

                {/* blog post text part */}
                <div className="blogPosts-socials">
                  <div className="blog-posts-texts">
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h2 id="Blog-post-category-heading">How did you out in the food industry?</h2>
                        <h5 id="blog-post-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos id commodi nobis iure impedit a reiciendis magnam dolores illum corporis totam, harum distinctio ullam, iste laborum saepe velit repellendus aliquam vero consequuntur mollitia minus? Recusandae sed ea voluptate eveniet?</h5>
                      </div>
                  </div>
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h2 id="Blog-post-category-heading">What do you like most about your job?</h2>
                        <h5 id="blog-post-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos id commodi nobis iure impedit a reiciendis magnam dolores illum corporis totam, harum distinctio ullam, iste laborum saepe velit repellendus aliquam vero consequuntur mollitia minus? Recusandae sed ea voluptate eveniet?</h5>
                      </div>
                  </div>
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h2 id="Blog-post-category-heading">Do you cook at home on your days off?</h2>
                        <img className="blog-post-img" src="/src/assets/blog-post/Rectangle 23.png" alt="" />
                        <h5 id="blog-post-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos id commodi nobis iure impedit a reiciendis magnam dolores illum corporis totam, harum distinctio ullam, iste laborum saepe velit repellendus aliquam vero consequuntur mollitia minus? Recusandae sed ea voluptate eveniet?</h5>
                      </div>
                  </div>
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h2 id="Blog-post-category-heading">What would your advice be to young people looking to get their foot in the door?</h2>
                        <h5 id="blog-post-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos id commodi nobis iure impedit a reiciendis magnam dolores illum corporis totam, harum distinctio ullam, iste laborum saepe velit repellendus aliquam vero consequuntur mollitia minus? Recusandae sed ea voluptate eveniet?</h5>
                      </div>
                  </div>
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h1 className="blog-post-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid modi beatae.</h1>
                      </div>
                  </div>
                  <div className="blogPostsTexts">
                      <div className="blog-post-text">
                        <h2 id="Blog-post-category-heading">What do you like most about your job?</h2>
                        <h5 id="blog-post-category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos id commodi nobis iure impedit a reiciendis magnam dolores illum corporis totam, harum distinctio ullam, iste laborum saepe velit repellendus aliquam vero consequuntur mollitia minus? Recusandae sed ea voluptate eveniet?</h5>
                      </div>
                  </div>
                  </div>
                  <div className="socials">
                    <h2 className="social-text">SHARE THIS ON:</h2>
                    <div className="icons" id="socials-icons">
                                <a href="#">
                                    <FaFacebook/>
                                </a>
                                <a href="#">
                                <FaInstagram/>
                                </a>
                                <a href="#">
                                    <FaTwitter/>
                                </a>
                                </div>
                  </div>
                </div>
    </div>
    </>
  )
}
export default BlogPost