import { Component } from "react";
import Social from "../components/Social";
import Map from "../util/hammer.gif";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic">Contact Me</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="con_out">
          <div class="con_in">
            <img src={Map} class="co1" alt="Map"></img>
          </div>
        </div>
        <a href="../util/BolinWang_Resume.pdf" title="" download>
          <div className="back3">Download Resume</div>
        </a>
        <a href="mailto:wangbolin9827@gmail.com">
          <div className="back3 back4">Contact Me</div>
        </a>
        {/* <div className="hr_line line3">
          <div className="inner3"></div>
        </div> */}
        <Social />
      </div>
    );
  }
}

export default Contact;
