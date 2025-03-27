import type { SecureData } from './types';

const sd1 = {
  data: 1,
  __read: ['a', 'b'],
  __write: ['c', 'd'],
};
expectTypeOf(sd1).toExtend<SecureData>();

const sd2 = {
  data: {
    user: 'john',
    age: 30,
  },
  __read: ['a', 'b'],
};
expectTypeOf(sd2).toExtend<SecureData>();

const sd3 = {
  data: true,
};
expectTypeOf(sd3).toExtend<SecureData>();

const sd4 = {
  data: 'hello',
  __write: ['a'],
};
expectTypeOf(sd4).toExtend<SecureData>();
