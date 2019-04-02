export class Updater {

  constructor(forceUpdate, store) {
    this.store = store;
    this.forceUpdate = forceUpdate;

    this.unsubscribeFromUpdate = this.unsubscribeFromUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  subscribeToUpdate() {
    this.updateSub = this.store.updateEvent.subscribe(this.forceUpdate);
  }

  unsubscribeFromUpdate() {
    this.updateSub.unsubscribe();
  }

  handleUpdate() {
    this.subscribeToUpdate();
    return this.unsubscribeFromUpdate;
  }
}