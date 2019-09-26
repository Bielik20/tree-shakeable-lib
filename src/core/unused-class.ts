import { Injectable } from '@wikia/dependency-injection';

@Injectable()
export class LibUnusedClass {
	constructor() {
		console.log('constructor LibUnusedClass');
	}
}
