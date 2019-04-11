import { ObjectArray, ObjectBit } from '../types';

export default class ObjectBitArray extends ObjectArray<ObjectBit> {
  public constructor() {
    super(ObjectBit, []);
  }
  
  public name() {
    return `[object BitArray]`;
  }
}
