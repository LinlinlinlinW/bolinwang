import { Component } from "react";
import project1 from "../util/project1.png";
import project2 from "../util/project2.png";
import project3 from "../util/project3.png";
import project4 from "../util/project4.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>

        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>

        <div class="port_out port1">
          <div class="port_in">
            {/* TODO: modify link later */}
            <a href="https://github.com/LinlinlinlinW/CPSC436V/tree/main/final_project" target="_blank" rel="noreferrer">
            {/* ../contents/crime_in_van/index.html */}
              <img
                src={project1}
                className="po1"
                alt="Crime In Vancouver"
              ></img>
            </a>
          </div>
        </div>

        <div class="port_out port2">
          <div class="port_in">
            <a href="https://sayhi-bolin.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={project2}
                className="po1"
                alt="SAYHI"
              ></img>
            </a>
          </div>
        </div>

        {/* <div class="port_out port3">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/To-do-list-v2" target="_blank" rel="noreferrer">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div> */}

        {/* <div class="port_out port4">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/Tribute-to-msd" target="_blank" rel="noreferrer">
              <img src={project4} className="po1" alt="Tribute to MSD"></img>
            </a>
          </div>
        </div> */}

      </div>
    );
  }
}

export default Portfolio;
