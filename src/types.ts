type _SecureData = {
  data: any;
  __read?: string[];
  __write?: string[];
};

interface _SecureDataMap {
  [key: string]: SecureData;
}

export type SecureData = _SecureData | _SecureDataMap;
