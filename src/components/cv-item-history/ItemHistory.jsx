import React from "react";
import Timeline from "../../assets/icons/TimeLine";
import IconSkills from "../icons/skills/IconSkills";


function ItemHistory({
  fill={fill},
  initialItem="0",
  itemExperience="0",
  height='zize-80px',
  initialDate = "2025",
  finalDate = "2025",
  initialMonth = "",
  finalMonth = "",
  title="Titulo",
  institucion="institucion",
  text="",
  text2="",
  text3="",
  link="",
  skills=["JavaScript"]

}) {


let headClass = itemExperience === "1"
  ? `item-history hover-exp ${height}`
  : `item-history ${height}`;

  let zize=height;

  return (
    <div
      className={headClass}
    >
      <div className="item-date-history">
        <div className="item-date">
          <p className="item-year">{initialDate}</p>
          <p className="item-month">{initialMonth}</p>
        </div>

        <p>-</p>

        <div className="item-date">
          <p className="item-year">{finalDate}</p>
          <p className="item-month">{finalMonth}</p>
        </div>
      </div>

      <div className="item-icon-history">
        <Timeline initialItem={initialItem} fill={fill}/>
      </div>

      <div className="item-text">
        <a className="item-text-title" href={link}>
        <h3 className="item-text-title">{title}</h3>
        
        <h6 className="item-text-institucion">{institucion}</h6>

         <div className="content-icon-skills">
          {skills.map((skill, index) => (
            <IconSkills key={skill} skill={skill} />
          ))}
        </div>

        {text !== "" && (
            <p className="item-text-text">{text}</p>
        )}

        </a>
      </div>
    </div>
  );
}

export default ItemHistory;
