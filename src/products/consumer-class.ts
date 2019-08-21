import { DependencyClass } from '@lib/core';
import { Inject } from 'typescript-ioc';

export class ConsumerClass {
	constructor(@Inject private dependency: DependencyClass) {}

	printName(): void {
		console.log(`${this.dependency.name} ${this.dependency.surname}`);
	}
}
