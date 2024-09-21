import React,{ useState } from "react";

import * as icons from "../../Assets/index.js";
import "../../Stylesheets/Header.css";

const Header = (props) => {
  const [toggleFilter, setToggleFilter] = useState(false);

  function handleDisplayToggle(e) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleGroupValue(e.target.value);
    }
  }
  function handleOrderingValue(e) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      props.handleOrderValue(e.target.value);
    }
  }
  return (
    <>
      <section className="header">
        <div className="header__container">
          <div>
            <div className="header__button" onClick={handleDisplayToggle}>
              <div className="header__icon header__filter">
                <img src={icons.display} alt="display-tune"/>
              </div>
              <div className="header__heading">Display</div>
              <div className="header__icon header__down">
                <img src={icons.down} alt="down arrow"/>
              </div>
            </div>
            <div
              className={
                toggleFilter
                  ? "header__dropdown header__dropdown-show"
                  : "header__dropdown"
              }
            >
              <div className="header__filters">
                <div className="header__dropdown-category">Grouping</div>
                <div className="header__dropdown-selector">
                  <select
                    value={props.groupValue}
                    onChange={handleDisplayToggle}
                    className="header__selector"
                    name="grouping"
                    id=""
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
              <div className="header__filters">
                <div className="header__dropdown-category">Ordering</div>
                <div className="header__dropdown-selector">
                  <select
                    value={props.orderValue}
                    onChange={handleOrderingValue}
                    className="header__selector"
                    name="grouping"
                    id=""
                  >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
