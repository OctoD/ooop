import Pow from '../../Math/Pow';
import ObjectFloat from '../../../Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import ObjectString from '../../../Types/ObjectString';

describe(`Pow`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Pow, ObjectFloat, ObjectFloat)(2, 2, 4);
    mathOperatorBaseThrow(Pow, ObjectString);
  });
});
