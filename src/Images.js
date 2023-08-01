export default function Images() {
  return (
    <>
      <h2 className="heading">My favourite Pictures.</h2>
      <div className="boundry">
        <img alt="" className="images" src="https://picsum.photos/200/300" />
      </div>

      <div className="boundry">
        <img
          alt=""
          className="images"
          src="https://picsum.photos/id/237/200/300"
        />
      </div>
    </>
  );
}
