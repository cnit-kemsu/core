export class ListNavigation {
  constructor(onChange) {
    this.onChange = onChange;

    this.update = this.update.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  update(total, limit, offset) {
    this.total = total;
    this.limit = limit;
    this.offset = offset <= total - limit ? offset : total - limit;
  }

  previous() {
    this.onChange(this.offset - this.limit, this.limit);
  }

  next() {
    this.onChange(this.offset + this.limit, this.limit);
  }
}