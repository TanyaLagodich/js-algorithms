import { assert } from 'chai';
import { doSearch } from '../binarySearch';

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

describe('binary search', () => {
    it ('binary search for `primes` for target `73`', () => {
        assert.equal(doSearch(primes, 73), 20);
    });
    it ('binary search for `primes` for target `13`', () => {
        assert.equal(doSearch(primes, 13), 5);
    });
    it ('binary search for `primes` for target `43`', () => {
        assert.equal(doSearch(primes, 43), 13);
    });
})