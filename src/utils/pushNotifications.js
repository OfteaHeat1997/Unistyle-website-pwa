/**
 * Push Notifications Utility
 * This file contains functions to handle push notifications in the application
 */

// Function to check if push notifications are supported
export const isPushNotificationSupported = () => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

// Function to request permission for push notifications
export const requestNotificationPermission = async () => {
  if (!isPushNotificationSupported()) {
    console.log('Push notifications are not supported in this browser');
    return false;
  }
  
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
};

// Function to subscribe to push notifications
export const subscribeToPushNotifications = async () => {
  if (!isPushNotificationSupported()) {
    return null;
  }
  
  try {
    // Get the service worker registration
    const registration = await navigator.serviceWorker.ready;
    
    // Get the push subscription
    let subscription = await registration.pushManager.getSubscription();
    
    // If no subscription exists, create one
    if (!subscription) {
      // Generate VAPID keys on your server and use them here
      // This is a placeholder for the actual public key you would generate
      const publicKey = 'YOUR_PUBLIC_VAPID_KEY';
      
      // Convert the public key to Uint8Array
      const applicationServerKey = urlBase64ToUint8Array(publicKey);
      
      // Create a new subscription
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      });
    }
    
    return subscription;
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
    return null;
  }
};

// Function to send the subscription to your server
export const sendSubscriptionToServer = async (subscription) => {
  if (!subscription) {
    return false;
  }
  
  try {
    // Send the subscription to your server
    // This is a placeholder for the actual API call
    const response = await fetch('/api/push-subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending subscription to server:', error);
    return false;
  }
};

// Function to unsubscribe from push notifications
export const unsubscribeFromPushNotifications = async () => {
  if (!isPushNotificationSupported()) {
    return false;
  }
  
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    
    if (subscription) {
      const result = await subscription.unsubscribe();
      
      if (result) {
        // Notify your server about the unsubscription
        // This is a placeholder for the actual API call
        await fetch('/api/push-subscriptions', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscription),
        });
      }
      
      return result;
    }
    
    return false;
  } catch (error) {
    console.error('Error unsubscribing from push notifications:', error);
    return false;
  }
};

// Helper function to convert base64 to Uint8Array
// This is needed for the applicationServerKey
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray;
};