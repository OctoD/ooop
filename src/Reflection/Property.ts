import { ObjectObject } from '../types';
import PropertyKey from './PropertyKey';

export default class Property extends ObjectObject {
  public getKey(): PropertyKey {
    return new PropertyKey(this.value()[0] as string);
  }
}
