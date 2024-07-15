import { useState } from "react";
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
          <a className="active" href="#">
            home
          </a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">skills</a>
        </li>
        <li>
          <a href="#">EXPERIENCE</a>
        </li>
        <li>
          <a href="#">work</a>
        </li>
      </ul>
    </aside>
  );
}
