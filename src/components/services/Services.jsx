import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import MugModelContainer from "./mug/MugModelContainer";

const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left"></div>
      <div className="sSection right"></div>
        <MugModelContainer/>
    </div>
  )
}

export default Services