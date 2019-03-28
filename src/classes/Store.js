import { Publisher } from '@implicit/publisher';

export class Store {
  changeEvent = new Publisher();

  constructor() {
    this.setState = this.setState.bind(this);
  }

  setState(state) {
    this.state = typeof state === 'function' ? state(this.state) : state;
    this.changeEvent.publish(this.state);
  }
}