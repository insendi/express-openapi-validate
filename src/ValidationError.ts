/*
  Copyright 2018 Santeri Hiltunen

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { ErrorObject } from "ajv";

export default class ValidationError extends Error {
  public statusCode: number;
  public data: ErrorObject[];

  constructor(message: string, errors: ErrorObject[]) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 400;
    this.data = errors;
  }
}
