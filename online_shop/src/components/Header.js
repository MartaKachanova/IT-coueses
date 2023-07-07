import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/">
            <img src="images/logo.png" alt="logo" height="45" />
          </Link>
          <div className="header__info">
            Hi,{" "}
            <Link to="/account" className="header__user">
              Log in
            </Link>
            <div className="header__shop">
              <Link to="/favourites">
                <img src="images/favourite.png" alt="favourite" height="20" />
                <span
                  className="header__shop--count"
                  id="headerFavouritesCount"
                >
                  0
                </span>
              </Link>
            </div>
            <button className="header__logout" id="headerLogout">
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
