import { Scope, Scoped } from 'typescript-ioc';

@Scoped(Scope.Transient)
export class LibUnusedClass {
	constructor() {
		console.log('constructor LibUnusedClass');
	}
}
