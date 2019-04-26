import { Subject } from 'rxjs'

export function second(name?: string) {
  console.log('this is from second')
  return new Subject()
}
