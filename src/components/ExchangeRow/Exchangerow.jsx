import Activities from "../Activities/Activities";
import Exchange from "../Exchange/Exchange";
import "./exchangeRow.css";

export default function Exchangerow() {
  return (
    <div className="exchangeRow">
      <Exchange />
      <Activities />
    </div>
  );
}
