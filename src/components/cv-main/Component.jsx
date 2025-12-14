import "./cv.css";

import About from "../cv-about/Component.jsx";
import ComponentName from "../cv-about/ComponentName.jsx";
import Experience from "../cv-exp-job/Experience.jsx";
import Education from "../cv-education/Education.jsx";
import BoardSkills from "../cv-board-skills/BoardSkills.jsx";

function CV() {
  
  return (
    <div className="cv-app">
      <div className="cv-content">
        <div className="cv-about">
          <ComponentName/>
          <About/>
        </div>

        <div className="cv-history">
          <Education fill="#f3c74a" />
          <Experience fill="#255585" />
        </div>
      </div>
      <div className="cv-skills">
          <BoardSkills fill="#255585" />
      </div>
    </div>
  );
}

export default CV;
