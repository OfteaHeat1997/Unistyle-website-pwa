import React, { useState, useEffect } from 'react';
import { 
  isPushNotificationSupported, 
  requestNotificationPermission, 
  subscribeToPushNotifications,
  sendSubscriptionToServer
} from '../utils/pushNotifications';
import './NotificationSubscription.css';

const NotificationSubscription = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState('default');

  // Temporarily disable this component completely
  return null;

  const checkSubscriptionStatus = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      setIsSubscribed(!!subscription);
    }
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    
    try {
      // Request permission with a timeout to prevent hanging
      const permissionPromise = requestNotificationPermission();
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Permission request timed out')), 5000)
      );
      
      const permissionGranted = await Promise.race([permissionPromise, timeoutPromise]);
      setPermissionStatus(Notification.permission);
      
      if (permissionGranted) {
        // Subscribe to push notifications
        const subscription = await subscribeToPushNotifications();
        
        if (subscription) {
          // Send subscription to server
          const success = await sendSubscriptionToServer(subscription);
          
          if (success) {
            setIsSubscribed(true);
          }
        }
      }
    } catch (error) {
      console.error('Error subscribing to notifications:', error);
      // If there's an error, don't show the component anymore
      setIsSupported(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSupported) {
    return null; // Don't render anything if push notifications are not supported
  }

  return (
    <div className="notification-subscription">
      {permissionStatus === 'default' && !isSubscribed && (
        <div className="notification-prompt">
          <p>Get notified about new products and special offers!</p>
          <button 
            className="subscribe-button"
            onClick={handleSubscribe}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Enable Notifications'}
          </button>
        </div>
      )}
      
      {permissionStatus === 'denied' && (
        <div className="notification-denied">
          <p>
            Notifications are blocked. Please enable notifications in your browser settings
            to receive updates about new products and offers.
          </p>
        </div>
      )}
      
      {isSubscribed && (
        <div className="notification-success">
          <p>You're subscribed to notifications!</p>
        </div>
      )}
    </div>
  );
};

export default NotificationSubscription;