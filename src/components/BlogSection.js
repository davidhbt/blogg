import React, { useEffect } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import none from '../assets/dummy-post-square-1-thegem-blog-default.jpg'

const BlogSection = (
  {
    id,
    title,
    description,
    category,
    imgUrl,
    userId,
    author,
    timestamp,
    user,
    handleDelete,
  }) => {
  return (
    <div>
      <div className="row pb-4" key={id}>
        <div className="col-md-5">
          <div className="hover-blogs-img">
            <div className="blogs-img" style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
              {imgUrl === undefined ? <img style={{ width: 'auto', height: '100%' }} className="none" src={none} alt={title} /> : <img src={imgUrl} />}
              {/* {console.log("hi", imgUrl)} */}
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-read">Read More</button>
          </Link>
          {user && user.uid === userId || user && user.uid === 'YyWVNVnrS8edQnJTIO7dzQA0Zbg1' ? (
            <div style={{ float: "right" }}>
              <FontAwesome
                name="trash"
                style={{ margin: "15px", cursor: "pointer" }}
                size="2x"
                onClick={() => handleDelete(id)}
              />
              <Link to={`/update/${id}`}>
                <FontAwesome
                  name="edit"
                  style={{ cursor: "pointer" }}
                  size="2x"
                />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
