export type StringFn = (input: string) => string;

export interface StringUtils {
  capitalize: StringFn;
  trim: StringFn;
  repeat: (input: string, times: number) => string;
  toSnakeCase: StringFn;
  toUpperCase: StringFn;
  toLowerCase: StringFn;
  isEmpty: (input: string) => boolean;
  reverseString: StringFn;
  truncate: (input: string, length: number) => string;
  removeSpaces: StringFn;
  countWords: (input: string) => number;
  startsWith: (input: string, start: string) => boolean;
  endsWith: (input: string, end: string) => boolean;
  replaceAll: (input: string, search: string, replace: string) => string;
}
