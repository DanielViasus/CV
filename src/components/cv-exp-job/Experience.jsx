import React from 'react'
import IconSeparador from "../../assets/icons/IconSeparador.jsx"
import ItemHistory from '../cv-item-history/ItemHistory.jsx';
import experience from '../../assets/experience/experience.js';

function Experience({fill}) {

  
  return (
    <div className='history-experience'>

        <div className='margin-top-experience'>
            <IconSeparador fill={fill}/>
        </div>
        <div className='title-education'> 
        <h2>Experiencia</h2>  
        </div>
        

        {experience.map((item, index) => (
        <ItemHistory
          key={index}
          fill={fill}
          initialItem={item.initialItem}
          itemExperience={item.itemExperience}
          height={item.height}
          initialDate={item.initialDate}
          finalDate={item.finalDate}
          initialMonth={item.initialMonth}
          finalMonth={item.finalMonth}
          title={item.title}
          institucion={item.institucion}
          link={item.link}
          skills={item.skills}
          text={item.text}
          text2={item.text2}
          text3={item.text3}
        />
      ))}

    </div>
  )
}

export default Experience;