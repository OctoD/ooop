import Subtract from '../../Math/Subtract';
import ObjectFloat from '../../../Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import { ObjectString } from '../../../types';

describe(`Subtract`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Subtract, ObjectFloat, ObjectFloat)(10, 7, 3);
    mathOperatorBaseThrow(Subtract, ObjectString);
  });
});
