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

import {describe, test, expect, jest, it} from '@jest/globals';
import App from '../App';
import { useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { equationState } from '../State';

const buildComponent = () => {
  return render(
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>,
  );
}

export const RecoilObserver = ({node, onChange}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

describe('testing recoil state of equation', () => {
  test('test multiple zeros', async () => {

    const onChange = jest.fn();
  
    render(
      <RecoilRoot>
        <BrowserRouter>
          <RecoilObserver node={equationState} onChange={onChange} />
          <App />
        </BrowserRouter>
      </RecoilRoot>,
    );
    
    fireEvent.click(screen.getByTestId('btn_zero'))
    console.log(onChange)
    fireEvent.click(screen.getByTestId('btn_zero'))
    fireEvent.click(screen.getByTestId('btn_zero'))
    fireEvent.click(screen.getByTestId('btn_one'))
  
    await waitFor(() => {
      const val = screen.getByTestId('calc_display');
      expect(val.textContent).toBe('1');
    })
  
    
    expect(onChange).toHaveBeenCalledWith('0001');
  });

})



it('tests the calculator as it would be used in the UI', async () => {
  buildComponent();

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

