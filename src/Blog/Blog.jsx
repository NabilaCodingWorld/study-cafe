import PropTypes from "prop-types";
import { LuBookMarked } from "react-icons/lu";

const Blog = ({ id, blog, handleBookMark, handleMarkAsRead }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="mb-5" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className=" flex gap-5 items-center mb-4">
          <img className="w-20" src={author_img} alt="" />
          <div>
            <p className=" font-semibold text-lg ">{author}</p>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>

        <div>
          <p className="text-gray-400 ">
            <span className="mr-2">{reading_time}min read</span>
            <button onClick={() => handleBookMark(blog)}>
              <LuBookMarked />
            </button>
          </p>
        </div>
      </div>
      <p className="text-xl font-semibold mb-5">{title}</p>
      <p className="text-gray-400 mb-5">
        {/* <span>#{hashtags[0]}</span> &nbsp;&nbsp; <span>#{hashtags[1]}</span> */}

        {hashtags.map((hash, idx) => (
          <span key={idx}> &nbsp;&nbsp;#{hash}</span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="mb-7 text-blue-700"
      >
        Mark as read
      </button>
      <br />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
