import React from "react";

const Blog = () => {
  return (
    <section className="blog_section blog_black">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2>Ashirwaad Updates</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="blog_wrapper blog_column3 owl-carousel">
            <div className="col-lg-4">
              <div className="single_blog">
                <div className="blog_thumb">
                  <a href="#"><img src="images/blog/4.jpg" alt="blog 4" /></a>
                </div>
                <div className="blog_content">
                  <h3><a href="#">Earrings for Navratri</a></h3>
                  <div className="author_name">
                    <p>
                      <span>by</span>
                      <span className="themes">Ashirwaad</span>
                      <span className="post_by">/ 4 November 2020</span>
                    </p>
                  </div>
                  <div className="post_desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.</p>
                  </div>
                  <div className="read_more">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single_blog">
                <div className="blog_thumb">
                  <a href="#"><img src="images/blog/1.jpg" alt="blog 1" /></a>
                </div>
                <div className="blog_content">
                  <h3><a href="#">Pendant for Engagement</a></h3>
                  <div className="author_name">
                    <p>
                      <span>by</span>
                      <span className="themes">Ashirwaad</span>
                      <span className="post_by">/ 3 November 2020</span>
                    </p>
                  </div>
                  <div className="post_desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.</p>
                  </div>
                  <div className="read_more">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single_blog">
                <div className="blog_thumb">
                  <a href="#"><img src="images/blog/2.jpg" alt="blog 2" /></a>
                </div>
                <div className="blog_content">
                  <h3><a href="#">Engagement Couple Rings</a></h3>
                  <div className="author_name">
                    <p>
                      <span>by</span>
                      <span className="themes">Ashirwaad</span>
                      <span className="post_by">/ 2 November 2020</span>
                    </p>
                  </div>
                  <div className="post_desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.</p>
                  </div>
                  <div className="read_more">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single_blog">
                <div className="blog_thumb">
                  <a href="#"><img src="images/blog/3.jpg" alt="blog 3" /></a>
                </div>
                <div className="blog_content">
                  <h3><a href="#">Earrings for Party</a></h3>
                  <div className="author_name">
                    <p>
                      <span>by</span>
                      <span className="themes">Ashirwaad</span>
                      <span className="post_by">/ 5 November 2020</span>
                    </p>
                  </div>
                  <div className="post_desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.</p>
                  </div>
                  <div className="read_more">
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
