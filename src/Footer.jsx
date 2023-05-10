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
import "./Footer.css"
import {Link} from "react-router-dom";
const Footer = () => {
  return(
    <>
      <h3>
        <footer>
          <div>
          <ul className="list">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul></div>
          <p>copyright (c)2023 Jabberbox</p>
        </footer>
      </h3>
    </>
  )
}

export default Footer;