import { notifications, updateEvent } from './Notifier';

export class Notification {
  constructor(message, variant = 'default') {
    this.message = message;
    this.variant = variant;
  }

  remove() {
    const noteIndex = notifications.indexOf(this);
    if (noteIndex !== -1) {
      notifications.splice(noteIndex, 1);
      updateEvent.publish();
    }
  }
}