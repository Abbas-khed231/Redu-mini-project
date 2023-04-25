import React from "react";
import "./Header.css";

function AmazonHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiRdlZ7wEgx0N2zOp29mOGeOnPdYS4UbCuQ&usqp=CAU"
              alt="Amazon Logo"
            />
          </a>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">{/* <FaSearch /> */}</button>
          </form>
        </div>
        <div className="account">
          <a href="#">Hello, Sign in</a>
          <div className="dropdown">
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Wish List</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AmazonHeader;