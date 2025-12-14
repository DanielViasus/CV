import "../../components/cv-main/cv.css";
import Angular from "../icons/skills/Angular"
import AutoCad from "../icons/skills/Autocad"
import CSharp from "../icons/skills/Csharp"
import Excel from "../icons/skills/Excel"
import JavaScript from "../icons/skills/Javascript"
import MongoDB from "../icons/skills/Mongodb"
import MySQL from "../icons/skills/Mysql"
import Python from "../icons/skills/Python"
import Qgis from "../icons/skills/Qgis"
import IReact from "../icons/skills/React"
import Next from "./skills/INext"
import SmallWorld from "../icons/skills/Smallworld"
import TiaPortal from "../icons/skills/Tiaportal"
import TypeScript from "./skills/Typescript"


function SelectorSkill({skill}) {

  let icon = skill=="Angular"?<Angular/>:skill=="AutoCAD"?<AutoCad/>:skill=="C#"?<CSharp/>:skill=="Excel"?<Excel/>:skill=="JavaScript"?<JavaScript/>:skill=="MongoDB"?<MongoDB/>:skill=="MySQL"?<MySQL/>:skill=="Python"?<Python/>:skill=="QGIS"?<Qgis/>:skill=="React"?<IReact/>:skill=="smallWorld GIS"?<SmallWorld/>:skill=="TIA Portal"?<TiaPortal/>:skill=="TypeScript"?<TypeScript/>:skill=="Next.js"?<Next/>:""
  
  
  return (    
    <div className="content-selector-Skill">
        {icon}
    </div>
        
  );
}

export default SelectorSkill;
