import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.account.value);
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/">
            <img src="images/logo.png" alt="logo" height="45" />
          </Link>
          <div className="header__info">
            Hi,{" "}
            {!user.name && (
              <Link to="/account" className="header__user">
                Log in
              </Link>
            )}
            {user.name}
            <div className="header__shop">
              <Link to="/favourites">
                <img src="images/favourite.png" alt="favourite" height="20" />
                <span
                  className="header__shop--count"
                  id="headerFavouritesCount"
                >
                  {user.favourites.length}
                </span>
              </Link>
            </div>
            {user.name && (
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate('/')
                }}
                className="header__logout"
                style={{ display: "block" }}
              >
                Log out
              </button>
              
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
