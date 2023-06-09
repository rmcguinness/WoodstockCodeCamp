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

import {expect, it} from '@jest/globals';
import { VerifyNextInput, Echo, INVALID_INPUT } from '../Logic';

it('verify display logic', () => { 
  expect(VerifyNextInput('', '0')).toBeTruthy();
  expect(VerifyNextInput('123', '.')).toBeTruthy();
})

it('Verifies an error is thrown', () => {
  expect(Echo('test')).toBe('test');
  
  expect(() => Echo('')).toThrow(INVALID_INPUT);
  expect(() => Echo()).toThrow(INVALID_INPUT);
  expect(() => Echo(null)).toThrow(INVALID_INPUT);
  expect(() => Echo(undefined)).toThrow(INVALID_INPUT);
})