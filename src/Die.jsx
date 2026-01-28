export default function Die(props) {
  const className = props.isHeld ? "is-held" : "dice-button";

  return (
    <button
      className={className}
      onClick={() => props.onHold(props.id)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
