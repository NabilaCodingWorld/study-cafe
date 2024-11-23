import { useState } from "react";
import Blogs from "./Blogs/Blogs";
import BookMark from "./BookMark/BookMark";
import Head from "./Head/Head";

const App = () => {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    // remove the read blog from bookmark
    const remainingBookMarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );

    setBookMarks(remainingBookMarks);
  };

  return (
    <div>
      <Head></Head>
      <div className="grid md:grid-cols-2 gap-10">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMark bookMarks={bookMarks} readingTime={readingTime}></BookMark>
      </div>
    </div>
  );
};

export default App;
