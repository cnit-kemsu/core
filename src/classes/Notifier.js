import { Publisher } from '@kemsu/publisher';

const duration = {
  'default': 5000,
  'success': 10000,
  'info': 20000,
  'warning': 15000
};

let count = 0;
export const notifications = [];
export const updateEvent = new Publisher();
export class Notifier {

  static push(note) {
    note.key = count;
    count++;
    notifications.push(note);
    updateEvent.publish();
    if (note.variant !== 'error') setTimeout(
      () => {
        const noteIndex = notifications.indexOf(note);
        if (noteIndex !== -1) {
          notifications.splice(noteIndex, 1);
          updateEvent.publish();
        }
      },
      duration[note.variant]
    );
  }

}