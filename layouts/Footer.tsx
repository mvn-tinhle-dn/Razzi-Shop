import React from "react";
import Logo from "../modules/Logo";

interface prop {}
const Footer: React.FC<prop> = () => {
  const toggleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    (e.target as HTMLElement).classList.toggle("active");
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-3 col-wide-4 col-medium-12 ">
              <div className="footer-logo">
                <a href=".">
                  {" "}
                  <Logo theme="light" color="#fff" />
                </a>
              </div>
              <div className="footer-socials">
                <a href=".">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="20"
                    height="20"
                    viewBox="0 0 7 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.27972 1.99219H6.30215V0.084375C6.12609 0.0585937 5.51942 0 4.81306 0C3.33882 0 2.32912 0.99375 2.32912 2.81953V4.5H0.702148V6.63281H2.32912V12H4.32306V6.63281H5.88427L6.13245 4.5H4.32306V3.03047C4.32306 2.41406 4.47791 1.99219 5.27972 1.99219Z"></path>
                  </svg>
                </a>
                <a href=".">
                  {" "}
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href=".">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.02,10.18v3.72v0.01h5.51c-0.26,1.57-1.67,4.22-5.5,4.22c-3.31,0-6.01-2.75-6.01-6.12s2.7-6.12,6.01-6.12 c1.87,0,3.13,0.8,3.85,1.48l2.84-2.76C16.99,2.99,14.73,2,12.03,2c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.77,0,9.6-4.06,9.6-9.77 c0-0.83-0.11-1.42-0.25-2.05H12.02z"></path>
                  </svg>
                </a>
                <a href=".">
                  <svg
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.749,17.396c-0.357,0.17-1.041,0.319-1.551,0.332c-1.539,0.041-1.837-1.081-1.85-1.896V9.847h3.861V6.937h-3.847V2.039 c0,0-2.77,0-2.817,0c-0.046,0-0.127,0.041-0.138,0.144c-0.165,1.499-0.867,4.13-3.783,5.181v2.484h1.945v6.282 c0,2.151,1.587,5.206,5.775,5.135c1.413-0.024,2.982-0.616,3.329-1.126L16.749,17.396z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-9 col-wide-8 col-medium-12 ">
              <div className="flex justify-content-between flex-wrap">
                <ul className="footer-menu">
                  <li
                    className=" footer-menu-head"
                    onClick={(e) => {
                      toggleActive(e);
                    }}
                  >
                    SUPPORT
                  </li>
                  <li className="footer-menu-content">
                    <ul className="footer-menu-info">
                      <li className="footer-menu-item">
                        <a href=".">Contact Us</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">FAQs</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Store Locator</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Shipping & Returns</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li
                    className=" footer-menu-head"
                    onClick={(e) => {
                      toggleActive(e);
                    }}
                  >
                    SHOP
                  </li>
                  <li className="footer-menu-content">
                    <ul className="footer-menu-info">
                      <li className="footer-menu-item">
                        <a href=".">Men’s Shopping</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Women’s Shopping</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Kids’ Shopping</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Discounts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li
                    className=" footer-menu-head"
                    onClick={(e) => {
                      toggleActive(e);
                    }}
                  >
                    COMPANY
                  </li>
                  <li className="footer-menu-content">
                    <ul className="footer-menu-info">
                      <li className="footer-menu-item">
                        <a href=".">Our Story</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Careers</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Terms & Conditions</a>
                      </li>
                      <li className="footer-menu-item">
                        <a href=".">Privacy & Cookie policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="footer-menu">
                  <li
                    className=" footer-menu-head"
                    onClick={(e) => {
                      toggleActive(e);
                    }}
                  >
                    CONTACT
                  </li>
                  <li className="footer-menu-content">
                    <ul className="footer-menu-info">
                      <li className="footer-menu-item">
                        <a href=".">1-888-923-8044</a>
                        <br />
                        <a href=".">1-888-923-8055</a>
                        <br />
                        <a href=".">help@allbirds.com</a>
                        <br />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="footer-bottom-left footer-bottom-item col-6 col-medium-12 ">
              <p>© 2021 All rights reserved.</p>
            </div>
            <div className="footer-bottom-right footer-bottom-item col-6 col-medium-12 ">
              <ul className="footer-bottom-payments flex">
                <li className="payments-item">
                  <img
                    src="https://i0.wp.com/demo4.drfuri.com/razzi3/wp-content/uploads/sites/17/2021/06/icons_payment.png?w=283&ssl=1"
                    alt="payments"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
