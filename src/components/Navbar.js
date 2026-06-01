import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

class Navbar extends Component {
  state = {
    clicked: false,
    showSignup: false,
    showLogin: false,
    isLoggedIn: !!localStorage.getItem("token")
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  openSignup = () => {
    this.setState({ showSignup: true });
  };

  closeSignup = () => {
    this.setState({ showSignup: false });
  };

  openLogin = () => {
    this.setState({ showLogin: true });
  };

  closeLogin = () => {
    this.setState({
      showLogin: false,
      isLoggedIn: !!localStorage.getItem("token")
    });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Trippy</h1>

          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            ))}

            {/* ✅ AUTH BUTTONS */}
            {this.state.isLoggedIn ? (
              <li>
                <button className="logout-btn" onClick={this.handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button className="login-btn" onClick={this.openLogin}>
                    Login
                  </button>
                </li>
                <li>
                  <button className="signup-btn" onClick={this.openSignup}>
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* POPUPS */}
        {this.state.showSignup && (
          <SignupForm onClose={this.closeSignup} />
        )}

        {this.state.showLogin && (
          <LoginForm onClose={this.closeLogin} />
        )}
      </>
    );
  }
}

export default Navbar;