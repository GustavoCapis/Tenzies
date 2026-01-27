export default function Die(props) {
  const className = props.isHeld ? "is-held" : "dice-button"

  return <button className={className}>{props.value}</button>;
}
