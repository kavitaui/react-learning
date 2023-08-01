const user = {
  name: "Haddy Lammar",
  imgurl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgsize: 90
};
export default function Content() {
  const name = "kavita";

  return (
    <>
      <h2 className="heading" contentEditable="true">
        {" "}
        Welcome To My App{" "}
      </h2>
      <button>I'm a button</button>
      <h3>{user.name}</h3>
      <img className="Avtar" src={user.imgurl} alt={"photo of" + user.name} />
      <p>{name}</p>
    </>
  );
}
