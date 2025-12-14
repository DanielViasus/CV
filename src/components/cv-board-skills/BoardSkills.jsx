import "../cv-main/cv.css";
import IconSeparadorDoble from "../../assets/icons/IconSeparadorDoble"
import listSkills from "../../assets/experience/skills";
import ItemSkills from "../cv-item-skill/ItemSkill";
import SelectorSkill from "../../assets/icons/SelectorSkills";


function BoardSkills() {

    return (
        <div className="content-board-skills">
            <div className='top-separator-doble'>
                <IconSeparadorDoble width="1500" />
            </div>

            <div className='title-skills'>
                <h2>Skills</h2>
            </div>


            <div className="board">
                {listSkills.map((skill, index , key) => (
                    <div key={index+skill.skill} className="content-element-item-skill">

                        <SelectorSkill
                            skill={skill.skill}
                            
                        />

                        <ItemSkills
                            skill={skill.skill}
                            porcentaje={skill.porcentaje}
                            color1={skill.color1}
                            color2={skill.color1}
                            
                        />
                        
                        <p className="text-element-item-skill">{skill.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BoardSkills;
