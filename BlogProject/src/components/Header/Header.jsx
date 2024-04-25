import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authenticationStatus = useSelector((state) => state.status);
  const navigation = useNavigate();

  const navigationItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authenticationStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      acive: !authenticationStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authenticationStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authenticationStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="75px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navigationItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigation(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            ;
            {/* This is normal react syntax yahan per kese authenticationStatus true hoga tab hi 
            yai li display hoga.   */}
            {authenticationStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
