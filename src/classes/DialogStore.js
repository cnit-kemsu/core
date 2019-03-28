import { Store } from './Store';

export class DialogStore extends Store {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(state) {
    this.setState({
      open: true,
      ...state
    });
  }

  close() {
    this.setState({
      open: false
    });
  }
}