import Divide from '../../Math/Divide';
import ObjectFloat from '../../../Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import { ObjectString } from '../../../types';

describe(`Divide`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Divide, ObjectFloat, ObjectFloat)(10, 5, 2);
    mathOperatorBaseThrow(Divide, ObjectString);
  });
});
