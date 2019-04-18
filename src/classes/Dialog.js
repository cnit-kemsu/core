import { Store } from './Store';

export class Dialog extends Store {
  state = {
    open: false
  };

  constructor(props) {
    super();

    this.static = props;
    
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(props) {
    this.props = {
      ...this.static,
      ...props
    };
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