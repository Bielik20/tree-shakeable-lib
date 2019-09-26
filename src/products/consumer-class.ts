import { LibDependencyClass } from '@lib/core';
import { Injectable } from '@wikia/dependency-injection';

@Injectable()
export class LibConsumerClass {
	constructor(private dependency: LibDependencyClass) {
		console.log('constructor LibConsumerClass');
	}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
