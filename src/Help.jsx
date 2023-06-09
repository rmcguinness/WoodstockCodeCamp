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
import './Help.css'

const Help = () => {
  return(
    <div id="card">
      <div className="about-header">
        <div className="about-wrapper">
          <div className="about-container">
            <header>
              <h6 className="about-caption">Calculator Version 1.x.x</h6>
            </header>

            <p className="orange-text">
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
      <div className = "help">
        <p><strong>Note On Calculator Logic:</strong> It should be noted that there are two main 
        schools of thought on calculator input logic: immediate execution logic and formula logic.
        Our example utilizes formula logic and observes order of operation precedence, immediate 
        execution does not. Either is acceptable, but please note that depending on which you choose,
        your calculator may yield different results than ours for certain equations (see below example). 
        As long as your math can be verified by another production calculator, please do not consider this a
        bug.</p>
        <div className = "flex-container">
          <div className = "flex-item"><p><strong>EXAMPLE:</strong></p></div>
          <div className = "flex-item"><p>3 + 5 x 6 - 2 / 4 =</p></div>
        </div>
        <div className = "flex-container">
          <div className = "flex-item"><p><strong>Immediate Execution Logic:</strong></p></div>
          <div className = "flex-item"><p>11.5</p></div>
        </div>
        <div className = "flex-container">
          <div className = "flex-item"><p><strong>Formula/Expression Logic:</strong></p></div>
          <div className = "flex-item"><p>32.5</p></div>
        </div>
      </div>
    </div>
  )
}

export default Help;