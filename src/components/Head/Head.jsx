import "./head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
export default function Head(props) {
  return (
    <div className="head">
      <div className="head__title">
        <span className="title__text">{props.title}</span>
        <span className="title__description">{props.description}</span>
      </div>
      <div className="head__left">
        <div className="widget">
          <div className="widget__top">
            <span className="widget__title">Purchase</span>
            <FontAwesomeIcon icon={faChartLine} className="widget__icon" />
          </div>
          <span className="widget__number">6,291$</span>
        </div>
        <div className="widget">
          <div className="widget__top">
            <span className="widget__title">Purchase</span>
            <FontAwesomeIcon icon={faChartLine} className="widget__icon" />
          </div>
          <span className="widget__number">6,291$</span>
        </div>
        <div className="widget">
          <div className="widget__top">
            <span className="widget__title">Purchase</span>
            <FontAwesomeIcon icon={faChartLine} className="widget__icon" />
          </div>
          <span className="widget__number">6,291$</span>
        </div>
      </div>
    </div>
  );
}
