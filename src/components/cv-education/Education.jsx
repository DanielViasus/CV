import React from 'react'
import IconSeparador from "../../assets/icons/IconSeparador.jsx"
import ItemHistory from '../cv-item-history/ItemHistory.jsx';

function Education({fill}) {
  return (
    <div className='history-education'>
        <div className='margin-top-education'>
            <IconSeparador fill={fill}/>
        </div>
        <div className='title-education'> 
        <h2>Educacion</h2>  
        </div>
        

        
        <ItemHistory
         fill={fill}
          height='zize-100px'
          initialItem="0"
          initialDate="2024" 
          finalDate='actual'
          initialMonth='OCTUBRE'
          finalMonth=''
          title='Ingenieria Mecatronica'
          institucion='Universidad Agraria de Colombia'
          link="https://www.uniagraria.edu.co/"
          text=''
        />

        <ItemHistory
          fill={fill}
          height='zize-100px'
          initialItem="1"
          initialDate="2025" 
          finalDate='actual'
          initialMonth='FEBRERO'
          finalMonth=''
          title='Desarrollo en entornos interactivos'
          institucion='SENA'
          link="https://www.sena.edu.co/es-co/Paginas/default.aspx"
          text=''
        />

        <ItemHistory
          fill={fill}
          height='zize-100px' 
          initialItem="2"
          initialDate="2022" 
          finalDate='2023'
          initialMonth='OCTUBRE'
          finalMonth='FEBRERO'
          title='FullStack Developer'
          institucion='HENRY'
          link="https://www.soyhenry.com/"
          text=''
        />
         
        

    </div>
  )
}

export default Education;