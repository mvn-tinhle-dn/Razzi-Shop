import React, { useEffect, useRef } from "react";
import DropdownToggle from "../components/DropdownToggle";
import OffCanvas from "../components/OffCanvas";
import Badges from "../modules/Badges";
import Logo from "../modules/Logo";
import MenuIcon from "../modules/MenuIcon";
import Notify from "../modules/Notify";
import { useSelector } from "react-redux";
import Search from "../modules/Search";
import User from "../modules/User";
import Cart from "../modules/Cart";

interface prop {}
const Header: React.FC<prop> = () => {
  const header = useRef<HTMLHeadingElement>(null);
  const useHeart = useSelector((state) => (state as any).useHeart.value);

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
                        <li className="mega-title">Shop Layout</li>
                        <li className="mega-item">
                          <a href=".">
                            Default
                            <Badges badges="New" />
                          </a>
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
                        <li className="mega-title">Product Layout</li>
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
                        <li className="mega-title">Product Types</li>
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
                          <a href=".">
                            Memory <Badges badges="New" />
                          </a>
                        </li>
                      </ul>
                      <ul className="sub-mega">
                        <li className="mega-title">Product Pages</li>
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
                        <li className="mega-title">Product Cards</li>
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
                        <li className="mega-title">Woo Pages</li>
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
                        <li className="mega-title">Product Cards</li>
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
                        <li className="mega-title">Woo Pages</li>
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
                        <li className="mega-title">Woo Pages</li>
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
                        <li className="mega-title">Shop Layout</li>
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
                        <li className="mega-title">Product Types</li>
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
                        <li className="mega-title">Product Cards</li>
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
              <Search />
            </a>
          </li>
          <li>
            <a href=".">
              <User />
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
              <Notify countNotify={useHeart} />
            </a>
          </li>
          <li>
            <a href=".">
              <Cart />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
