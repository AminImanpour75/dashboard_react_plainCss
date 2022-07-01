import "./topBar.css";
import {
  faBarsStaggered,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar() {
  return (
    <div className="topbar">
      <FontAwesomeIcon icon={faBarsStaggered} className="topbar__icon" />
      <div className="topbar__right">
        <FontAwesomeIcon icon={faMessage} className="topbar__icon secondary" />
        <FontAwesomeIcon icon={faBell} className="topbar__icon secondary" />
        <img
          src="https://picsum.photos/200/300"
          alt="Lorem"
          className="topbar__avatar"
        />
        <div className="topbar__name">
          <span className="topbar__name__title">Amin Imanpour</span>
          <span className="topbar__name__job">FrontEnd Developer</span>
        </div>
      </div>
    </div>
  );
}
