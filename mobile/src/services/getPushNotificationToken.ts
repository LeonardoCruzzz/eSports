import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();

    return;
  }

  const pushToken = await Notifications.getExpoPushTokenAsync();
  console.log(pushToken.data);

  return pushToken.data;
}