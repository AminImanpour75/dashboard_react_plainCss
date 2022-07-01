import "./summary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Btn/Btn";

export default function Summary() {
  return (
    <div className="summary">
      <div className="summary__head">
        <div className="summary__head__left">
          <span className="summary__head__link">
            <a href="http://localhost:3000">Analytics</a>
          </span>
          <span className="summary__head__link">
            <a href="http://localhost:3000">CryptoCurrency</a>
          </span>
          <span className="summary__head__link">
            <a href="http://localhost:3000">Compaign</a>
          </span>
          <span className="summary__head__link">
            <a href="http://localhost:3000">
              <span>More</span>
              <FontAwesomeIcon icon={faChevronDown} className="summary__icon" />
            </a>
          </span>
        </div>
        <div className="summary__head__right">
          <Btn text="Todo" />
          <Btn text="Setting" />
        </div>
      </div>
      <div className="summary__body">
        <div className="summary__widget">
          <span className="summary__widget__title">Total Income</span>
          <span className="summary__widget__number">$ 14,025</span>
          <div className="summary__widget__botttom">
            <span className="summary__widget__text">3.78</span>
            <span className="summary__widget__text">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
            <span className="summary__widget__text">This month</span>
          </div>
        </div>
        <div className="summary__widget">
          <span className="summary__widget__title">Total Income</span>
          <span className="summary__widget__number">$ 14,025</span>
          <div className="summary__widget__botttom">
            <span className="summary__widget__text">3.78</span>
            <span className="summary__widget__text">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
            <span className="summary__widget__text">This month</span>
          </div>
        </div>
        <div className="summary__widget">
          <span className="summary__widget__title">Total Income</span>
          <span className="summary__widget__number">$ 14,025</span>
          <div className="summary__widget__botttom">
            <span className="summary__widget__text">3.78</span>
            <span className="summary__widget__text">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
            <span className="summary__widget__text">This month</span>
          </div>
        </div>
        <div className="summary__widget">
          <span className="summary__widget__title">Total Income</span>
          <span className="summary__widget__number">$ 14,025</span>
          <div className="summary__widget__botttom">
            <span className="summary__widget__text">3.78</span>
            <span className="summary__widget__text">
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
            <span className="summary__widget__text">This month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
