import Multiply from '../Math/Multiply';
import ObjectFloat from '../../Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from './__ignore__/create-operator-test';
import { ObjectString } from '../../types';

describe(`Multiply`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Multiply, ObjectFloat, ObjectFloat)(10, 5, 50);
    mathOperatorBaseThrow(Multiply, ObjectString);
  });
});
