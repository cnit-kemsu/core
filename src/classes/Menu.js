import { Store } from './Store';

export class Menu extends Store {
  state = {
    target: null
  };

  constructor(props) {
    super();

    this.static = props;
    
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(event, props) {
    this.props = {
      ...this.static,
      ...props
    };
    this.setState({
      target: event.currentTarget
    });
  }

  close() {
    this.props = undefined;
    this.setState({
      target: null
    });
  }
}