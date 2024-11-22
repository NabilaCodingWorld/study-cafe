import photo from "../../src/assets/profile.png";
const Head = () => {
  return (
    <div>
      <div className="flex justify-around mt-10 mb-3 ">
        <h1 className="text-4xl">Knowledge Cafe</h1>
        <img src={photo} alt="" />
      </div>
      <hr className="mx-10" />
    </div>
  );
};

export default Head;
