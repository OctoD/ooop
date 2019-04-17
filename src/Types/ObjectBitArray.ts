import ObjectArray from '@Types/ObjectArray';
import ObjectBit from '@Types/ObjectBit';

export default class ObjectBitArray extends ObjectArray<ObjectBit> {
  public constructor () {
    super(ObjectBit, []);
  }

  public name() {
    return `[object BitArray]`;
  }
} 
