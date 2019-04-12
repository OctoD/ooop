import ObjectArray from './ObjectArray';
import ObjectBit from './ObjectBit';

export default class ObjectBitArray extends ObjectArray<ObjectBit> {
  public constructor () {
    super(ObjectBit, []);
  }

  public name() {
    return `[object BitArray]`;
  }
}
