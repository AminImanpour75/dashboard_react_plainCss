import "./btn.css";

export default function Btn(props) {
  return (
    <div>
      <button type="button" className={"btn__simple " + props.className}>
        {props.text}
      </button>
    </div>
  );
}
