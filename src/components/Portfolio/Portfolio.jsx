import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__balance">
        <h3 className="portfolio__balance__number">64,450.00$</h3>
        <span className="portfolio__balance__text">Total Balance</span>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item__left">
          <FontAwesomeIcon icon={faBitcoinSign} className="portfolio__icon" />
          <h3 className="portolio__sym">Bitcoin</h3>
        </div>
        <div className="portfolio__item__right">
          <div className="portfolio__item__balance">
            <h3 className="portfolio__sym__balance">0.004 BTC</h3>
            <span className="portfolio__usd__balance">1200 USD</span>
          </div>
          <div className="portfolio__item__percent green">
            <span className="portfolio__percent">+3.5%</span>
            <FontAwesomeIcon icon={faChevronUp} className="percent__icon" />
          </div>
        </div>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item__left">
          <FontAwesomeIcon icon={faBitcoinSign} className="portfolio__icon" />
          <h3 className="portolio__sym">Bitcoin</h3>
        </div>
        <div className="portfolio__item__right">
          <div className="portfolio__item__balance">
            <h3 className="portfolio__sym__balance">0.004 BTC</h3>
            <span className="portfolio__usd__balance">1200 USD</span>
          </div>
          <div className="portfolio__item__percent red">
            <span className="portfolio__percent">+3.5%</span>
            <FontAwesomeIcon icon={faChevronDown} className="percent__icon" />
          </div>
        </div>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item__left">
          <FontAwesomeIcon icon={faBitcoinSign} className="portfolio__icon" />
          <h3 className="portolio__sym">Bitcoin</h3>
        </div>
        <div className="portfolio__item__right">
          <div className="portfolio__item__balance">
            <h3 className="portfolio__sym__balance">0.004 BTC</h3>
            <span className="portfolio__usd__balance">1200 USD</span>
          </div>
          <div className="portfolio__item__percent green">
            <span className="portfolio__percent">+3.5%</span>
            <FontAwesomeIcon icon={faChevronUp} className="percent__icon" />
          </div>
        </div>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item__left">
          <FontAwesomeIcon icon={faBitcoinSign} className="portfolio__icon" />
          <h3 className="portolio__sym">Bitcoin</h3>
        </div>
        <div className="portfolio__item__right">
          <div className="portfolio__item__balance">
            <h3 className="portfolio__sym__balance">0.004 BTC</h3>
            <span className="portfolio__usd__balance">1200 USD</span>
          </div>
          <div className="portfolio__item__percent green">
            <span className="portfolio__percent">+3.5%</span>
            <FontAwesomeIcon icon={faChevronUp} className="percent__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
