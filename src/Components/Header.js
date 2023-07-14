import HeaderStyle from './styles/Header_styled'
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown)

  return (
    <HeaderStyle>
      <section className="section">
        <Link to={"/"}>
          <div className="logo" alt="logo"></div>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="title">COZ Shopping</div>
        </Link>
      </section>
      <section className="section">
        <div>
          {dropdown ? (
            <Dropdown>
            </Dropdown>
          ) : null}
        </div>
        <img
          src="images/hamburger.svg"
          alt="dropdown"
          onClick={toggleDropdown}
        />
      </section>
    </HeaderStyle>
  );
};

export default Header;
