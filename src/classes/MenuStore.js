import { Store } from './Store';

export class MenuStore extends Store {
  constructor(data) {
    super();
    this.data = data;
    this.state = {
      target: null
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(event, state) {
    this.setState({
      target: event.currentTarget,
      ...state
    });
  }

  close() {
    this.setState({
      target: null
    });
  }
}