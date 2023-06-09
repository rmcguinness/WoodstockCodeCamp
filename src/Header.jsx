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
import "./Header.css"
import {Link}  from "react-router-dom";
import mainlogo from "./images-about/bendy3.jpg";
import secondlogo from "./images-about/bendy2.jpg";
const Header = () => {
  return(
    <>
      
        <nav className="header">
            <div className="nav-logo">
            <img src={mainlogo} id="logo"/>
            </div>
            <div className="nav-button">
              <ul className="list">
              <li><Link to="/">Calculator</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/help">Help</Link></li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Header;