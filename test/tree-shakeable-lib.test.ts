import { DependencyClass } from '../src/core';

/**
 * Dummy test
 */
describe('Dummy test', () => {
	it('works if true is truthy', () => {
		expect(true).toBeTruthy();
	});

	it('DummyClass is instantiable', () => {
		expect(new DependencyClass()).toBeInstanceOf(DependencyClass);
	});
});
