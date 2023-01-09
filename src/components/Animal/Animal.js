export default function Animal(props) {
  return (
    <div className="cat-container" style={{ top: props.top, left: props.left }}>
      {/* <img src="benny.png" /> */}
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
