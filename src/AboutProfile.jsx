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
import heatherAvatar from './images-about/IMG_2306.jpeg';
import josilynAvatar from './images-about/crazyTrain.jpg';

let bioObjs = [{
    id: 0,
    name: 'Heather Jackson',
    email: 'heather.jackson2003@gmail.com',
    avatar: heatherAvatar,
    bio: 'I am currently becoming a web-developer through Free Code Camp',
  },

  {
    id: 1,
    name: 'Josilyn McGuinness',
    email: josilynAvatar,
    avatar: "./images-about/crazyTrain.jpg",
    bio: "I am flooding my desicated sponge of a brain with, what feels like, an onslot of technical information in hopes it will eventually soak it up, enabling me to become a proficient programmer ",
  },
]

const AboutProfile = () => {

  let arrayBioObjs = bioObjs.map(bioObj => 
    <div key={bioObj.id}>
      <p>{bioObj.name}</p>
      <email>{bioObj.email}</email>
      <img src={bioObj.avatar}/>
      <p>{bioObj.bio}</p>
    </div>
  )

  return(
    <>
      {arrayBioObjs}
    </>
  );
}

export default AboutProfile;