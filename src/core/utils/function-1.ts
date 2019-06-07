export function first(): void {
	const o = { a: '', b: '' };
	console.log('this is from first', { ...o, c: 'c' });
}
