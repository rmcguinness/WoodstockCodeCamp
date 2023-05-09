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

let bioObjs = [{
    id: 0,
    name: 'Heather Jackson',
    email: 'heather.jackson2003@gmail.com',
  },

  {
    id: 1,
    name: 'Sally Mae',
    email: 'example@gmail.com',
    
  },
]

const AboutProfile = () => {

  let arrayBioObjs = bioObjs.map(bioObj => 
    <li key={bioObj.id}>
      <ul>{bioObj.name}</ul>
      <ul>{bioObj.email}</ul>
    </li>
  )

  return(
    <>
      <ul>{arrayBioObjs}</ul>
    </>
  );
}

export default AboutProfile;