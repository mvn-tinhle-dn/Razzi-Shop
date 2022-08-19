import React, { useEffect, useRef } from "react";
import DropdownToggle from "../components/DropdownToggle";
import OffCanvas from "../components/OffCanvas";
import Logo from "../modules/Logo";
import MenuIcon from "../modules/MenuIcon";

interface prop {}
const Header: React.FC<prop> = () => {
  const header = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrolled = window.scrollY;

      if (scrolled >= 100) {
        (header.current as HTMLHeadingElement)?.classList.add("header-up");
      } else {
        (header.current as HTMLHeadingElement)?.classList.remove("header-up");
      }
    });
  });
  return (
    <header ref={header} className="header">
      <div className="container flex align-items-center justify-content-between">
        <div className="header-item menu-icon">
          <OffCanvas />
        </div>
        <div className="header-item header-logo">
          <a href=".">
            <Logo />
          </a>
        </div>
        <nav className="main-navigation header-item header-center">
          <ul className="nav-menu flex">
            <li className="menu-item flex align-items-center">
              <DropdownToggle href="." title="Home" widthSub={500}>
                <ul className="dropdown-sub-menu">
                  <li className="dropdown-sub-item flex">
                    <div className="menu-item-mega">
                      <ul className="sub-mega ">
                        <li className="mega-item ">
                          <a href=".">Home v1 – Minimal</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v2 – Classic</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v3 – Fashion</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v4 – Boxes</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v5 – Simple</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v6 – Asymmetric</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v7 – Masonry</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v8 – Landing</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v9 – Fashion</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v10 – Cases</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Home v11 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v12 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v13 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v14 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v15 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v16 – Instagram</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega">
                      {" "}
                      <ul className="sub-mega ">
                        <li className="mega-item ">
                          <a href=".">Home v17 – Interior Decor</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v18 – Food Store</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v19 – Electronics</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v20 – Parallax</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v21 – Cosmetics</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v22 – Full Width</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v23 – Jewelry</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v24 – Baby</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v25 – Furniture</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v26 – Pharmacy</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Home v27 – Tools</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v28 – Nails</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v29 – Fashion Sport</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v30 – Books</a>
                        </li>
                        <li className="mega-item ">
                          <a href=".">Home v31 – Grocery</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </DropdownToggle>
            </li>
            <li className="menu-item flex align-items-center">
              <DropdownToggle
                href="."
                title="Shop"
                location="center"
                widthSub={800}
              >
                <ul className="dropdown-sub-menu">
                  <li className="dropdown-sub-item flex">
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Shop Layout
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Layout
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Types
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Pages
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Cards
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Woo Pages
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Cards
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Woo Pages
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Woo Pages
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </DropdownToggle>
            </li>
            <li className="menu-item flex align-items-center">
              <DropdownToggle href="." title="Blog">
                <ul className="sub-mega">
                  <li className="mega-item">
                    <a href=".">Blog Grid 2 Columns</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Blog Grid 3 Columns</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Single Post</a>
                  </li>
                </ul>
              </DropdownToggle>
            </li>
            <li className="menu-item flex align-items-center">
              <DropdownToggle href="." title="Page">
                {" "}
                <ul className="sub-mega">
                  <li className="mega-item">
                    <a href=".">About Us</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">FAQs</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Shipping & Returns</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Store Locator</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Contact Us</a>
                  </li>
                  <li className="mega-item">
                    <a href=".">Coming Soon</a>
                  </li>
                </ul>
              </DropdownToggle>
            </li>
            <li className="menu-item flex align-items-center">
              <DropdownToggle
                href="."
                title="Features"
                location="center"
                widthSub={650}
              >
                <ul className="dropdown-sub-menu">
                  <li className="dropdown-sub-item flex">
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Shop Layout
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Types
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-item-mega col-3">
                      <ul className="sub-mega">
                        <a href="." className="mega-title">
                          Product Cards
                        </a>
                        <li className="mega-item">
                          <a href=".">Default</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Topbar</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Collapse</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Model</a>
                        </li>
                        <li className="mega-item">
                          <a href=".">Memory</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </DropdownToggle>
            </li>
          </ul>
        </nav>
        <ul className="header-item header-left flex ">
          <li>
            <a href=".">
              <svg
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </li>
          <li>
            <a href=".">
              <svg
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a href=".">
              <svg
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href=".">
              <svg
                aria-hidden="true"
                role="img"
                focusable="false"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M21.9353 20.0337L20.7493 8.51772C20.7003 8.0402 20.2981 7.67725 19.8181 7.67725H4.21338C3.73464 7.67725 3.33264 8.03898 3.28239 8.51523L2.06458 20.0368C1.96408 21.0424 2.29928 22.0529 2.98399 22.8097C3.66874 23.566 4.63999 24.0001 5.64897 24.0001H18.3827C19.387 24.0001 20.3492 23.5747 21.0214 22.8322C21.7031 22.081 22.0361 21.0623 21.9353 20.0337ZM19.6348 21.5748C19.3115 21.9312 18.8668 22.1275 18.3827 22.1275H5.6493C5.16836 22.1275 4.70303 21.9181 4.37252 21.553C4.042 21.1878 3.88005 20.7031 3.92749 20.2284L5.056 9.55014H18.9732L20.0724 20.2216C20.1223 20.7281 19.9666 21.2087 19.6348 21.5748Z"
                  fill="currentColor"
                ></path>{" "}
                <path
                  d="M12.1717 0C9.21181 0 6.80365 2.40811 6.80365 5.36803V8.6138H8.67622V5.36803C8.67622 3.44053 10.2442 1.87256 12.1717 1.87256C14.0992 1.87256 15.6674 3.44053 15.6674 5.36803V8.6138H17.5397V5.36803C17.5397 2.40811 15.1316 0 12.1717 0Z"
                  fill="currentColor"
                ></path>{" "}
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
