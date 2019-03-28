export class Updater {

  constructor(forceUpdate, observable) {
    this.observable = observable;
    this.forceUpdate = forceUpdate;

    this.handleChange = this.handleChange.bind(this);
    this.unsubscribeFromEvents = this.unsubscribeFromEvents.bind(this);
    this.handleSubscriptions = this.handleSubscriptions.bind(this);
  }

  handleChange() {
    this.forceUpdate();
  }

  subscribeToEvents() {
    this.changeSub = this.observable.changeEvent.subscribe(this.handleChange);
  }

  unsubscribeFromEvents() {
    this.changeSub.unsubscribe();
  }

  handleSubscriptions() {
    this.subscribeToEvents();
    return this.unsubscribeFromEvents;
  }
}