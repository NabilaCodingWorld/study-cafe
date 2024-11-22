import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
          <p className="text-gray-400">
            <span>{reading_time}</span> min read
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
      <p className="mb-7 text-blue-700">Mark as read</p>
      <br />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
