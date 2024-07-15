import { useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../../Images/about-BgAkqdr2.jpg";
import "./SideBar.css";

export default function SiderBar() {
  const [isActive, setActive] = useState(true);
  const [activeLink, setActiveLink] = useState("home");

  function handleLinkClick(link) {
    setActiveLink(link);
  }

  function handelActive() {
    setActive(!isActive);
  }

  return (
    <aside className={isActive ? "" : "hide"}>
      <button className="clo-ope-aside-btn" onClick={handelActive}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="userImage">
        <img src={profilePicture} alt="profile picture" />
      </div>

      <div className="info">
        <span className="userName">Jackson Ford</span>
        <p className="userJopTitle">
          <span href="#">UI/UX/DESIGNER </span>
          IN PHILIPPINES
        </p>
      </div>

      <ul>
        <li>
          <Link
            className={activeLink === "home" ? "active" : ""}
            to={"home"}
            onClick={() => handleLinkClick("home")}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "about" ? "active" : ""}
            to={"about"}
            onClick={() => handleLinkClick("about")}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "skills" ? "active" : ""}
            to={"skills"}
            onClick={() => handleLinkClick("skills")}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "experience" ? "active" : ""}
            to={"experience"}
            onClick={() => handleLinkClick("experience")}
          >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link
            className={activeLink === "work" ? "active" : ""}
            to={"work"}
            onClick={() => handleLinkClick("work")}
          >
            work
          </Link>
        </li>
      </ul>
    </aside>
  );
}
