import React from "react";
import './Education.scss';

function Education() {
    return (
        <section id='education'>
            <div className="row row-break">
                <div className="three columns header-col">
                    <h1 className="section-title"><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h1 className="title">Wilfrid Laurier University</h1>
                            <h1 className="subtitle"><em>Business and Computer Science (Double Degree) • Fall 2020 - Present</em></h1>
                            <div className="achievements">
                                <p>• 11.05 GPA out of 12</p>
                                <p>• Entrance scholarship - 95% admission average</p>
                                <p>• Co-op option</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education