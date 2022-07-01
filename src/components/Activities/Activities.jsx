import "./activities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faBitcoinSign,
} from "@fortawesome/free-solid-svg-icons";
import Btn from "../Btn/Btn";

export default function Activities() {
  return (
    <div className="activities">
      <div className="activities__head">
        <h3>Recent Activities</h3>
        <Btn text="View All" />
      </div>
      <table className="table">
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon sell" />
          </td>
          <td className="col__2">
            <span className="position__text sell">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon sell" />
          </td>
          <td className="col__2">
            <span className="position__text sell">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon buy" />
          </td>
          <td className="col__2">
            <span className="position__text buy">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon sell" />
          </td>
          <td className="col__2">
            <span className="position__text sell">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon buy" />
          </td>
          <td className="col__2">
            <span className="position__text buy">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
        <tr className="table__row">
          <td className="col__1">
            <FontAwesomeIcon icon={faArrowUp} className="table__icon buy" />
          </td>
          <td className="col__2">
            <span className="position__text buy">sold</span>
          </td>
          <td className="col__3">
            <FontAwesomeIcon className="sym__icon" icon={faBitcoinSign} />
            <span>Bitcoin</span>
          </td>
          <td className="col__4">
            <span>Using - Bank......4585</span>
          </td>
          <td className="col__5">-0.000234 BTC </td>
          <td className="col__6">-0.454 USD</td>
        </tr>
      </table>
    </div>
  );
}
