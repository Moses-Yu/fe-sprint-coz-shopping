import HeaderStyle from './Header_styled'
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

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
          onClick={() => setDropdown(!dropdown)}
        />
      </section>
    </HeaderStyle>
  );
};

export default Header;
