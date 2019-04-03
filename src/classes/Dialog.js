import { Store } from './Store';

export class Dialog extends Store {
  state = {
    open: false
  };

  constructor() {
    super();
    
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(props) {
    this.props = props;
    this.setState({
      open: true
    });
  }

  close() {
    this.props = undefined;
    this.setState({
      open: false
    });
  }
}