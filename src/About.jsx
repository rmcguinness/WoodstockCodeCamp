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

const About = () => {
  return (
    <>
      <div className="about-header">
        <div className="about-wrapper">
          <div className="about-container">
            <header>
              <h3>About</h3>
              <h6 className='about-caption'>Version 1.x.x</h6>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur labore voluptates veniam eveniet ab. Odit inventore
              placeat, distinctio commodi qui necessitatibus dolore facere hic?
              Tempora quae unde illum voluptatem. Cum.
            </p>
          </div>
        </div>
      </div>
      <AboutProfile />
    </>
  );
};

export default About;
