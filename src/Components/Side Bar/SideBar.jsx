import { useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../../Images/about-BgAkqdr2.jpg";
import "./SideBar.css";

export default function SiderBar() {
  const [isActive, setActive] = useState(true);

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
          <Link className="active" to={"home"}>
            home
          </Link>
        </li>
        <li>
          <Link to={"about"}>about</Link>
        </li>
        <li>
          <Link to={"skills"}>skills</Link>
        </li>
        <li>
          <Link to={"experience"}>EXPERIENCE</Link>
        </li>
        <li>
          <Link to={"work"}>work</Link>
        </li>
      </ul>
    </aside>
  );
}
