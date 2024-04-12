import { useState } from "react";
import Form from "./Form";
import Cart from "./Cart";
import { useTheme } from "../App";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [notCart, setNotCart] = useState(false);
  const isDarkMode = useTheme();

  console.log(isDarkMode);
  return (
    <header className={`header ${isDarkMode ? "headers" : "ligth"}`}>
      <nav className="main_nav">
        <div className="logo">Logo</div>
        <div>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>contact</li>
            <li>partners</li>
            <li>profile</li>
            <li>login</li>
          </ul>
        </div>
<div className="divButton">
  <button className="headerButton" onClick={() => setNotCart(true)}>cart</button>
        <button className="headerButton" onClick={() => setModal(true)}>add produckt</button>
        </div>
      </nav>
      {notCart && <Cart setNotCart={setNotCart}/>}
      {modal && <Form setModal={setModal} />}
    </header>
  );
};
export default Header;
