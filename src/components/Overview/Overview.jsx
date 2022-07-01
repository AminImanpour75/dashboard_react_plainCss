import "./overview.css";
import Btn from "../Btn/Btn";
import Chart from "../Chart/Chart";
import { ChartData } from "../../api/Chartdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../Portfolio/Portfolio";
export default function Overview() {
  return (
    <div className="overview">
      <div className="overview__head">
        <div className="overview__left">
          <h2 className="overview__title">Overview</h2>
          <span className="overview__description">
            Statistics, Predictive Analytics Data Visualization, Big Data
            Analytics, etc.
          </span>
        </div>
        <div className="overview__right">
          <Btn text="Export" />
          <Btn text="Import" />
        </div>
      </div>
      <div className="overview__body">
        <div className="overview__body__col mr">
          <div className="overview__body__head">
            <h3 className="overview__body__title">Balance Chart</h3>
            <div className="overview__body__left__btn">
              <Btn text="1Y" />
              <Btn text="3M" className="btn__active" />
              <Btn text="1M" />
              <Btn text="1W" />
            </div>
          </div>
          <Chart data={ChartData} dataKey="balance" />
        </div>
        <div className="overview__body__col">
          <div className="overview__body__head">
            <h3 className="overview__body__title">Your Portfolio</h3>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
