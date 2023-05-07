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

import renderer from 'react-test-renderer';
import App from '../App';
import { render, screen } from '@testing-library/react';
import { getByText } from '@testing-library/react';

it('verify app page', () => {
  
  const component = renderer.create(<App/>,);
  let tree = component.toJSON();

  // Verify the state of the application is valid on start
  expect(tree).toMatchSnapshot();

})

it('verify header', () => {
  const component = render(<App />);

  // Ensure that the text is rendered to the screen
  expect(screen.queryByText('Calculator Application')).toBeTruthy();

});