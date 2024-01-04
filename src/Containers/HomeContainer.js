import React from 'react';
import Background from '../Components/Background.js';
import '../Styles/Components/HomeContainer.scss';

export default function HomeContainer() {
    return (
        <div>
            <Background />
            <div style={{ position: 'absolute', top: '15%', left: '20%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Education:</h1>

                <p style={{ color: 'white', textAlign: 'center' }}>FACULTY OF TECHNICAL SCIENCES NOVI SAD <br></br>Applied software engineering at the electrical department</p>

                <p style={{ color: 'white', textAlign: 'center' }}>FACULTY OF TECHNICAL SCIENCES NOVI SAD  <br />  Bachelor with honours in information engineering/data science <br />  at electrical department</p>


                <p style={{ color: 'white', textAlign: 'center' }}>ELECTROTECHNICAL SCHOOL "NIKOLA TESLA" KRALJEVO <br></br> Studied information technology</p>
            </div>



            <div style={{ position: 'absolute', top: '18%', right: '0%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Professional Experience:</h1>

                <p style={{ color: 'white', textAlign: 'center' }}>January 2023 - July 2023 <br></br>
                    Fullstack software developer at RationaleTech</p>
                <p style={{ color: 'white', textAlign: 'center' }}>Applied software engineering at the electrical department</p>

                <p style={{ color: 'white', textAlign: 'center' }}>December 2021 - November 2022 <br></br>
                    Fullstack software developer at Lionize</p>
                <p style={{ color: 'white', textAlign: 'center' }}>
                    November 2021 - December 2021
                    <br />
                    Backend software developer internship at LEVI9
                </p>

                <p style={{ color: 'white', textAlign: 'center' }}>
                    March 2021 - April 2021
                    <br />
                    Fullstack software developer internship at VEGA IT
                </p>


            </div>

            <div style={{ position: 'absolute', bottom: '10%', right: '5%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Hi, I am Nikola</h1>
                <p style={{ color: 'white', textAlign: 'center' }}>Scroll down to get to know me!</p>
            </div>

            <div style={{ position: 'absolute', bottom: '10%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Hi, I am Nikola</h1>
                <p style={{ color: 'white', textAlign: 'center' }}>Scroll down to get to know me!</p>
            </div>


            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Hi, I am Nikola</h1>
                <p style={{ color: 'white', textAlign: 'center' }}>I'm a motivated Full Stack Engineer with expertise in various
                    languages, databases, and frameworks. Passionate about
                    problem-solving and delivering high-quality projects on
                    time. Strong at collaboration and adaptable.</p>
            </div>
        </div>
    );
}
