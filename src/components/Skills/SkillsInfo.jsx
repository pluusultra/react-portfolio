import './Skills.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import Education from "./Education";
import Awards from "./Awards";
import Services from "./Services";
import WorkExperience from "./WorkExperience";

const SkillsInfo = (props) => {
    return (
        <section className="skills section" id="skills">
            <div className="container flex-center">
                <SectionTitle title='Skills' subTitle='Skills'/>
                <div className="inner-content">
                    <div className="skills-description">
                        <h3>Education & Skills</h3>
                        <p>
                            For more than 5 years our experts have been accomplishing enough with modern Web
                            Development,
                            new generation web and app programming language.
                        </p>
                    </div>
                    <div className="skills-info education-all">
                        <Education/>
                        <Services/>
                        <Awards/>

                    </div>
                    <WorkExperience/>
                </div>
            </div>
        </section>
    );
}

export default SkillsInfo;