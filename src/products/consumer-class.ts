import { LibDependencyClass } from '@lib/core';
import { Inject } from 'typescript-ioc';

export class LibConsumerClass {
	constructor(@Inject private dependency: LibDependencyClass) {
		console.log('constructor LibConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
