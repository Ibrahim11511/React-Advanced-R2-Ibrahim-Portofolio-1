import "./WorkPage.css";
import projectImage from "../../Images/img-1-C4nS0eD8.jpg";
export default function WorkPage() {
  return (
    <section className="workPage">
      <span>MY WORK</span>
      <h1>RECENT WORK</h1>
      <ul className="categories">
        <li>Graphic Design</li>
        <li>Apps</li>
        <li>Software</li>
      </ul>

      <ul className="projects">
        <li className="project">
          <div className="frontCard">
            <img src={projectImage} alt="" />
          </div>
          <div className="backCard">
            <h2 className="projectName">Work 2</h2>
            <span className="projectCategories">animation</span>
            <ul>
              <li>Shear</li>
              <li>views</li>
              <li>likes</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <div className="frontCard">
            <img src={projectImage} alt="" />
          </div>
          <div className="backCard">
            <h2 className="projectName">Work 2</h2>
            <span className="projectCategories">animation</span>
            <ul>
              <li>Shear</li>
              <li>views</li>
              <li>likes</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <div className="frontCard">
            <img src={projectImage} alt="" />
          </div>
          <div className="backCard">
            <h2 className="projectName">Work 2</h2>
            <span className="projectCategories">animation</span>
            <ul>
              <li>Shear</li>
              <li>views</li>
              <li>likes</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <div className="frontCard">
            <img src={projectImage} alt="" />
          </div>
          <div className="backCard">
            <h2 className="projectName">Work 2</h2>
            <span className="projectCategories">animation</span>
            <ul>
              <li>Shear</li>
              <li>views</li>
              <li>likes</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}
