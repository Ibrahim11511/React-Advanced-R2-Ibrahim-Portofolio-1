import { useState } from "react";
import "./HomeBage.css";
export default function HomeBage() {
  const [isActive, setActive] = useState(true);

  setInterval(() => {
    setActive(!isActive);
  }, 5000);
  return (
    <div className={`home ${isActive ? "second" : ""}`}>
      <div className="container">
        <h1>
          Hi! <br />a Deigner
        </h1>
        <p>
          100% html5 bootstrap templates Made <br /> By <a>Colorlib.com</a>
        </p>
        <button>Download cv</button>
      </div>
    </div>
  );
}
