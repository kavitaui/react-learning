export default function DateComponant() {
  var currentDate = new Date();
  return (
    <>
      <p>
        {currentDate.getFullYear()} and today is
        {currentDate.getDay()}
        {currentDate.toString()}
      </p>
    </>
  );
}
