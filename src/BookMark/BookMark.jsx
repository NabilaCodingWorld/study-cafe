import PropTypes from "prop-types";
import SingleBookMarks from "../SingleBookMarks/SingleBookMarks";

const BookMark = ({ bookMarks, readingTime }) => {
  return (
    <div>
      <p className="my-10 text-3xl">Reading Time: {readingTime} </p>
      <p className="my-10 text-3xl">BookMarked Blogs: {bookMarks.length}</p>
      <div>
        {bookMarks.map((singleBookMark, idx) => (
          <SingleBookMarks
            singleBookMark={singleBookMark}
            key={idx}
          ></SingleBookMarks>
        ))}
      </div>
    </div>
  );
};

BookMark.propTypes = {
  bookMarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number,
};

export default BookMark;
