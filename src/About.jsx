// Copyright 2023 Ryan McGuinness
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import './About.css';
import AboutProfile from './AboutProfile';
import { Circle } from '../style';



const About = () => {

  let textColor = '#e4af3a';

  return (
    <>
      <div className="about-header">
        <div className="about-wrapper">
          <div className="about-container">
            <header>
              <h3 style={{color: textColor}}>About</h3>
              <h6 className="about-caption">Version 1.x.x</h6>
            </header>

            <p style={{color: textColor}}>
              A single page application using React with Vite. The calculator
              supports addition, subtraction, multiplication and division. It
              also supports positive and negative numbers in the following
              number sets: natural, whole, integer, and rational. The calculator
              supports correct application of mathematical operations over time
              and in the correct order.
            </p>
          </div>
        </div>
      </div>

      <Circle style={{ padding: '40px' }}>
        <p style={{ position: 'relative', left: '80px', fontSize: '2em' }}>
          MEET THE TEAM
        </p>
      </Circle>
      <AboutProfile />
    </>
  );
};

export default About;
