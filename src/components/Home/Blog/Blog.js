import React from "react";
import wilson from "../../../images/wilson.png";
import BlogPost from "./BlogPost";

const Blog = () => {
  const blogData = [
    {
      title: "Check at least a doctor in a year for your teeth",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Cudi",
      authorImg: wilson,
      date: "23 April 2019",
    },
    {
      title: "Two time brush in a day can keep you healthy",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Sinthia",
      authorImg: wilson,
      date: "23 April 2019",
    },
    {
      title: "The tooth cancer is taking a challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "Dr. Cudi",
      authorImg: wilson,
      date: "23 April 2019",
    },
  ];
  return (
    <section className="mt-5 mb-5" id="blog">
      <div className="text-center mb-5">
        <h5 style={{ color: "#5FC7C7" }}>BLOG</h5>
        <h2 style={{ color: "#3a4256" }}>From Our Blog News</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row w-75 mt-5 ">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
