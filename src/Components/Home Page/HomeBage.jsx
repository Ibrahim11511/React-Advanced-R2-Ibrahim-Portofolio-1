import { useState } from "react";
import firstImageBG from "../../Images/img_bg_1-PzvG2r05.jpg";
import secondImageBG from "../../Images/img_bg_2-DzCs5o-0.jpg";
import "./HomeBage.css";
export default function HomeBage() {
  const [isActive, setActive] = useState(true);

  setInterval(() => {
    setActive(!isActive);
  }, 5000);
  return (
    <section className={`homePage ${isActive ? "first" : "second"}`}>
      <div className="firstPage">
        <div className="imageContainer">
          <img src={firstImageBG} alt="" />
        </div>
        <div className="content">
          <h1>
            Hi! <br />
            Im Jackson
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By
            <a href="#"> Colorlib.com</a>
          </p>
          <button>Download cv</button>
        </div>
      </div>

      <div className="secondPage">
        <div className="imageContainer">
          <img src={secondImageBG} alt="" />
        </div>
        <div className="content">
          <h1>
            Hi! <br />a Deigner
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By
            <a href="#"> Colorlib.com</a>
          </p>
          <button>view portofolio</button>
        </div>
      </div>
    </section>
  );
}
