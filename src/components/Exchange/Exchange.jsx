import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./exchange.css";

export default function Exchange() {
  return (
    <div className="exchange">
      <div className="exchange__head">
        <h3 className="exchange__head__title">Exchange</h3>
        <FontAwesomeIcon icon={faEllipsis} className="exchange__head__icon" />
      </div>
      <div className="exchange__body">
        <form className="form">
          <div className="form__group">
            <label className="form__label">Currency</label>
            <div className="form__group__input">
              <div className="form__text">
                <span>Bitcoin</span>
                <FontAwesomeIcon icon={faChevronDown} className="input__icon" />
              </div>
              <input
                type="text"
                placeholder="125.00 USD"
                className="form__input"
              />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label">Payment Method</label>
            <div className="form__group__input">
              <div className="form__text">
                <span>Bitcoin</span>
                <FontAwesomeIcon icon={faChevronDown} className="input__icon" />
              </div>
              <input
                type="text"
                placeholder="125.00 USD"
                className="form__input"
              />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label">Enter Your Amount</label>
            <div className="form__group__input">
              <div className="form__text">
                <span>Bitcoin</span>
                <FontAwesomeIcon icon={faChevronDown} className="input__icon" />
              </div>
              <input
                type="text"
                placeholder="125.00 USD"
                className="form__input"
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__caption">
              <span>Monthly Limit</span>
              <span>$49750 remaining</span>
            </div>
          </div>
          <div className="form__group">
            <button className="form__btn">Exchange Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
