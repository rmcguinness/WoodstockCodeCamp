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

export const VerifyNextInput = (display, toAppend) => {
  const toTest = '' + display + toAppend
  return toTest != null && 
    toTest.length > 0 &&
    !toTest.includes('00') &&
    !toTest.includes('..');
}

export const INVALID_INPUT = "Invalid Input";

export const Echo = (display) => {
  if (display === null || display === undefined ||  display.trim().length == 0) {
    throw INVALID_INPUT;
  }
  return display;
}