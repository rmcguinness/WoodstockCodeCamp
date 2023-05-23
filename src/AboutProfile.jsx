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

/**Styling updates:
 * Imported styled components for easier readability
 * Wrapped bio-section in grid display
 * Paragraph component uses height and width to keep rows aligned
 * bio-wrapper div centers and aligns information
 * media query for bio section to switch to column display on mobile
 * **To-Do**
 * Possible add title/role to go under Name for each developer
 * Import AnimatePresence API for image rendering
 * Copy email to clipboard/email redirect on click
 * Add mini-tabs for different technologies for each developer
 */
import heatherAvatar from './images-about/IMG_2306.jpeg';
import josilynAvatar from './images-about/crazyTrain.jpeg';
import JenilleAvatar from './images-about/20221008_170821.jpg';
import codyAvatar from './images-about/cody.jpg';
import zacAvatar from './images-about/zac-horton.jpg';
import jordanAvatar from './images-about/jordan-daniel.jpg';

import { AiOutlineMail } from 'react-icons/ai';
import { Profile, Paragraph, Email, Name } from '../style';

let bioObjs = [
  {
    id: 0,
    name: 'Heather Jackson',
    email: 'heather.jackson2003@gmail.com',
    avatar: heatherAvatar,
    bio: 'I am currently becoming a web-developer through Free Code Camp',
  },

  {
    id: 1,
    name: 'Josilyn McGuinness',
    email: 'josilyn@fallingonline.com',
    avatar: josilynAvatar,
    bio: 'I am flooding my desiccated sponge of a brain with, what feels like, an onslot of technical information in hopes it will eventually soak it up, enabling me to become a proficient programmer ',
  },
  {
    id: 2,
    name: 'Jenille Tulloch-Douglas',
    email: 'jenilletulloch@gmail.com',
    avatar: JenilleAvatar,
    bio: 'I am currently learning Web-Development through FreeCodeCamp Woodstock',
  },
  {
    id: 3,
    name: 'Cody Black',
    email: 'cdblack86@gmail.com',
    avatar: codyAvatar,
    bio: 'Working through FreeCodeCamp with the goal of becoming a software engineer',
  },
  {
    id: 4,
    name: 'Zac Horton',
    email: 'fullstackzac@gmail.com',
    avatar: zacAvatar,
    bio: 'Husband, father, and problem solver who is using the freeCodeCamp curriculum and other resources to become a full-stack web developer',
  },
  {
    id: 5,
    name: 'Jordan Daniel',
    email: 'jjosephd804@gmail.com',
    avatar: jordanAvatar,
    bio: 'Jr. Software Engineer experienced in using technologies such as HTML, CSS, JS, React, TailwindCSS, Node',
  },
];

const AboutProfile = () => {
  let arrayBioObjs = bioObjs.map((bioObj) => (
    <div key={bioObj.id}>
      <Profile
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Name>{bioObj.name}</Name>

        <img src={bioObj.avatar} />
        <Email>
          <AiOutlineMail className="email-icon" />
          <email>{bioObj.email}</email>
        </Email>
        <Paragraph>
          <p>{bioObj.bio}</p>
        </Paragraph>
      </Profile>
    </div>
  ));

  return (
    <>
      <div className="profile-wrap">{arrayBioObjs}</div>
    </>
  );
};

export default AboutProfile;
