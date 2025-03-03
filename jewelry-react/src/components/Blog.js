import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const blogData = [
    {
      image: "/images/blog/4.jpg",
      title: "Earrings for Navratri",
      author: "Ashirwaad",
      date: "4 November 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.",
      link: "#",
    },
    {
      image: "/images/blog/1.jpg",
      title: "Pendant for Engagement",
      author: "Ashirwaad",
      date: "3 November 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.",
      link: "#",
    },
    {
      image: "/images/blog/2.jpg",
      title: "Engagement Couple Rings",
      author: "Ashirwaad",
      date: "2 November 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.",
      link: "#",
    },
    {
      image: "/images/blog/3.jpg",
      title: "Earrings for Party",
      author: "Ashirwaad",
      date: "5 November 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit commodi quo eligendi laudantium quisquam, magnam hic numquam fuga illum sed aperiam sint, expedita dolor.",
      link: "#",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
        <Slider {...settings}>
          {blogData.map((blog, index) => (
            <div className="single_blog" key={index}>
              <div className="blog_thumb">
                <a href={blog.link}>
                  <img src={blog.image} alt={`blog ${index + 1}`} />
                </a>
              </div>
              <div className="blog_content">
                <h3>
                  <a href={blog.link}>{blog.title}</a>
                </h3>
                <div className="author_name">
                  <p>
                    <span>by</span>
                    <span className="themes"> {blog.author}</span>
                    <span className="post_by"> / {blog.date}</span>
                  </p>
                </div>
                <div className="post_desc">
                  <p>{blog.description}</p>
                </div>
                <div className="read_more">
                  <a href={blog.link}>Continue Reading</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
