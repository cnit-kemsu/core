import { Publisher } from '@kemsu/publisher';

export class Store {
  updateEvent = new Publisher();

  constructor() {
    this.setState = this.setState.bind(this);
  }

  setState(state) {
    this.state = typeof state === 'function' ? state(this.state) : state;
    this.updateEvent.publish(this.state);
  }
}