import Blogs from "./Blogs/Blogs";
import BookMark from "./BookMark/BookMark";
import Head from "./Head/Head";

const App = () => {
  return (
    <div>
      <Head></Head>
      <div className="grid md:grid-cols-2 gap-10">
        <Blogs></Blogs>
        <BookMark></BookMark>
      </div>
    </div>
  );
};

export default App;
