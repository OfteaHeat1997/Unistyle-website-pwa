// Service Worker for Unistyles PWA
const CACHE_NAME = 'unistyles-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bundle.js',
  // Add other assets that should be cached for offline use
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old caches
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the service worker takes control of all clients as soon as it's activated
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip caching for certain types of requests
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/api/') || url.pathname.endsWith('.hot-update.js')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clone the response because it's a one-time use stream
        const responseToCache = response.clone();
        
        // Cache the response for future use
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
        return response;
      })
      .catch(() => {
        // If network request fails, try to serve from cache
        return caches.match(event.request);
      })
  );
});

// Push event - handle push notifications
self.addEventListener('push', (event) => {
  try {
    const data = event.data ? event.data.json() : { title: 'New Notification', body: 'You have a new notification' };
    const options = {
      body: data.body,
      // Don't use icon and badge if they don't exist yet
      // icon: 'icons/icon-192x192.png',
      // badge: 'icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '1'
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
        },
        {
          action: 'close',
          title: 'Close',
        },
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  } catch (error) {
    console.error('Error showing notification:', error);
  }
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    // Open the app and navigate to a specific page
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});