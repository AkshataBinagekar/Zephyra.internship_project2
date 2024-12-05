import React from "react";
import "./Navbar2.css";
function Navbar2() {
  return (
    <div className="women_nav">
      <div className="navbar2">
        <ul className="ul">
          <li className="list">Gifting</li>
          <li className="list" >Nordic Looks</li>
          <li className="list">New in</li>
          <li className="list">Clothing</li>
          <li className="list">Shoes</li>
          <li className="list">Accessories</li>
          <li className="list">Streetwear</li>
          <li className="list">Sports</li>
          <li className="list">
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar2;
