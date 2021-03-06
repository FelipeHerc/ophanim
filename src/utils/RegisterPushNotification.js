import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export default async function RegisterPushNotification() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();

  return console.log(token);
}