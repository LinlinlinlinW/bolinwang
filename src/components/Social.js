import { Component } from "react";

class Social extends Component {

  setClickWeixin(e) {
    e.preventDefault()
    // TODO
  }

  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/LinlinlinlinW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://www.linkedin.com/in/bolinwang227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://www.instagram.com/bolinnww/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          class="btnsame btn4"
          href="/"
          onClick={this.setClickWeixin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-weixin"></i>
        </a>
      </div>
    );
  }
}

export default Social;
