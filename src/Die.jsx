export default function Die(props) {
  const className = props.isHeld ? "is-held" : "dice-button";

  return (
    <button className={className} onClick={() => props.onHold(props.id)}>
      {props.value}
    </button>
  );
}
