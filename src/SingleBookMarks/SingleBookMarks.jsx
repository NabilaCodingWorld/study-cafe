import PropTypes from "prop-types";
const SingleBookMarks = ({ singleBookMark }) => {
  const { title } = singleBookMark;

  return <div className="text-2xl"> {title} </div>;
};

SingleBookMarks.propTypes = {
  singleBookMark: PropTypes.array,
};

export default SingleBookMarks;
