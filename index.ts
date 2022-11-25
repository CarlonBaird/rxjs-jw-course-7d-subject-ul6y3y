import { fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();
//fromEvent(emitButton, 'click').subscribe(() => value$.next(inputElement.value));

//A subject can be an observable and an observer. It can be passed to the subscribe method
fromEvent(emitButton, 'click')
  .pipe(map(() => inputElement.value))
  .subscribe(value$);

fromEvent(subscribeButton, 'click').subscribe(() => {
  console.log('New Subscription');
  value$.subscribe((value) => console.log(value));
});
