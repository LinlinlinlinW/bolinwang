import { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2">
                    <div className="inner2 inner3"></div>
                </div>
                <h2 className="abouthead">Bolin <mark className="mark2">Wang</mark></h2>
                <p>I come from Shenzhen, where my dream starts ☀</p>
                <br></br>

                {/* <p className="p10">I started my journey in the world of computers from an young age,
                    now I’m 21 years old, Pursuing my Computer Science and Engineering Degree in
                    GNDEC Ludhiana.  Web development is my center of interest, i always
                    love the idea of cross-platform development, 1-n one code base deploy into almost
                    any platform, which web technology like Javascript enables me to do. I also like
                    creating Interactive UI components for better UX  and share those design and codes
                    to the world through Github and Instagram.
                </p> */}

                {/* <div className="Edu">
                    <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
                </div> */}

                <div className='row'>
                    <div className='column'>
                        <h3>Work Experience</h3>
                        <div className='vr_line' id="vr_line_intern">
                            <div className="vr_inner inn1"></div>
                            <div className="vr_inner inn2"></div>
                            <div className="vr_inner inn3"></div>
                        </div>

                        <h4>Citigroup</h4>
                        <p className="p1">Mississauga, ON Canada</p>
                        <p className="p1">Jul. 2022 - Present</p>
                        <p className="p1">Software Development Analyst</p>

                        <h4>Citigroup</h4>
                        <p className="p1">Mississauga, ON Canada</p>
                        <p className="p1">May 2021 - Aug. 2021</p>
                        <p className="p1">Summer Software Development Analyst</p>

                        <h4>Incognito Software Systems Inc.</h4>
                        <p className="p1">Vancouver, BC Canada</p>
                        <p className="p1">Sept. 2020 - Apr. 2021</p>
                        <p className="p1">QA/UI Software Engineer</p>
                    </div>

                    <div className='column'>
                        <h3>Education</h3>
                        <div className="vr_line" id="vr_line_edu">
                            <div className="vr_inner inn1"></div>
                            <div className="vr_inner inn2"></div>
                            <div className="vr_inner inn3"></div>
                        </div>

                        <h4>The University of British Columbia</h4>
                        <p className="p1">Vancouver, BC Canada</p>
                        <p className="p1">Sept. 2018 - May 2022</p>
                        <p className="p1">Bachelor of Computer Science</p>

                        <h4>Central China Normal University</h4>
                        <p className="p1">Wuhan, Hubei China</p>
                        <p className="p1">Sept. 2016 - May 2018</p>
                        <p className="p1">Major in Digital Media (Transferred)</p>

                        <h4>Shenzhen Experimental High School</h4>
                        <p className="p1">Shenzhen, Guangdong China</p>
                        <p className="p1">Sept. 2013 - May 2016</p>
                        <p className="p1">Science Stream</p>
                    </div>

                </div>

                {/* <h3 class="sk_head">Skills</h3>
                <div class="sk">HTML</div>
                <div class="sk s2">CSS</div>
                <div class="sk s3">JavaScript</div>
                <div class="sk s4">React</div>
                <div class="sk s5">Node</div>
                <div class="sk s6">Python</div> */}
            </div>
        )
    }
}

export default About

