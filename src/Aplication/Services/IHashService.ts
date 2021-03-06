/* eslint-disable no-unused-vars */
export interface IHashService {
    hash(value: string): Promise<string>;
    compare(valueToCompare: string, base: string): Promise<boolean>;
}
