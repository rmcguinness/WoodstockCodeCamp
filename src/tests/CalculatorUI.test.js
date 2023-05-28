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

import {it, expect} from '@jest/globals';
import App from '../App';
import {BrowserRouter} from "react-router-dom";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

it('tests the calculator as it would be used in the UI', async () => {
  const component = render(<RecoilRoot><BrowserRouter><App /></BrowserRouter></RecoilRoot>);

  fireEvent.click(screen.getByTestId('btn_seven'))
  fireEvent.click(screen.getByTestId('btn_eight'))
  
  await waitFor(() => {
    const val = screen.getByTestId('calc_display')
    expect(val.textContent).toBe('78')
  })

  fireEvent.click(screen.getByTestId('btn_addition'))
  fireEvent.click(screen.getByTestId('btn_two'))

  await waitFor(() => {
    const val = screen.getByTestId('calc_display')
    expect(val.textContent).toBe('2')
  })

  fireEvent.click(screen.getByTestId('btn_equals'))

  await waitFor(() => {
    const val = screen.getByTestId('calc_display')
    expect(val.textContent).toBe('80')
  })
})

