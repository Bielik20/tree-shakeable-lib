import { Injectable } from 'typescript-ioc';

@Injectable()
export class LibUnusedClass {
	constructor() {
		console.log('constructor LibUnusedClass');
	}
}
