import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWallet,
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>BitCrypto</h3>
      </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <ul className="sidebar__menu__list">
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="sidebar__menu__icon"
                />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="sidebar__menu__icon"
                />

                <span>Crypto Wallet</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="sidebar__menu__icon"
                />
                <spna>Buy & Sell</spna>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faUser}
                  className="sidebar__menu__icon"
                />
                <span>Trader Profile</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="sidebar__menu__icon"
                />
                <span> Search</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faLineChart}
                  className="sidebar__menu__icon"
                />
                <span> Trading Chart</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="sidebar__menu__icon"
                />

                <span>Crypto Wallet</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="sidebar__menu__icon"
                />
                <spna>Buy & Sell</spna>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faUser}
                  className="sidebar__menu__icon"
                />
                <span>Trader Profile</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="sidebar__menu__icon"
                />
                <span> Search</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faLineChart}
                  className="sidebar__menu__icon"
                />
                <span> Trading Chart</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="sidebar__menu__icon"
                />

                <span>Crypto Wallet</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="sidebar__menu__icon"
                />
                <spna>Buy & Sell</spna>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faUser}
                  className="sidebar__menu__icon"
                />
                <span>Trader Profile</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="sidebar__menu__icon"
                />
                <span> Search</span>
              </a>
            </li>
            <li className="sidebar__menu__list__item">
              <a href="http://localhost:3000">
                <FontAwesomeIcon
                  icon={faLineChart}
                  className="sidebar__menu__icon"
                />
                <span> Trading Chart</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
