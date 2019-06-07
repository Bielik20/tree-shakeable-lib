import { Subject } from 'rxjs';

export function second(name?: string): Subject<void> {
	console.log('this is from second');
	return new Subject();
}
