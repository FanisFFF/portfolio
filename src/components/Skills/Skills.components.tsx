import "./skills.styles.scss";

function Skills() {
  return (
    <div id="skills" className="skills-section">
      {/* <h2>Skills</h2>  */}
      <div className="skills-row">
        <div>
          <i style={{ color: "#ff4d00" }} className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>
        <div>
          <i
            style={{ color: "rgb(52, 144, 202)" }}
            className="fa-brands fa-css3"
          ></i>
          <p>CSS</p>
        </div>
        <div>
          <i
            style={{ color: "rgb(221, 191, 48)" }}
            className="fa-brands fa-js"
          ></i>
          <p>Javascript</p>
        </div>
        <div>
          <i style={{ color: "#61DBFB" }} className="fa-brands fa-react"></i>
          <p>React</p>
        </div>
        <div>
          <i style={{ color: "#F05133" }} className="fa-brands fa-git-alt"></i>
          <p>Git</p>
        </div>
        <div>
          <i style={{ color: "#539E43" }} className="fa-brands fa-node"></i>
          <p>Node</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
