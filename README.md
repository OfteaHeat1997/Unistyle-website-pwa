# Leonisa Website PWA

This project is a Progressive Web App (PWA) implementation of a fashion e-commerce website inspired by Leonisa. It features a responsive design, offline functionality, and push notifications.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Component-Based Architecture**: Built with React for maintainability
- **CSS Variables**: Easy customization of colors, fonts, and spacing
- **Offline Functionality**: Works without an internet connection
- **Push Notifications**: Keeps users informed about new products and offers
- **PWA Features**: Installable on devices with app-like experience

## Project Structure

- `public/`: Static assets and HTML template
  - `index.html`: Main HTML template
  - `manifest.json`: PWA manifest file
  - `service-worker.js`: Service worker for offline functionality and push notifications
  - `icons/`: PWA icons (to be added)

- `src/`: Source code
  - `index.js`: Entry point
  - `App.js`: Main application component with routing
  - `components/`: React components
  - `pages/`: Page components
  - `styles/`: CSS files
  - `utils/`: Utility functions

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## PWA Features

### Service Worker

The service worker provides:
- Offline functionality by caching assets
- Background sync for offline actions
- Push notification handling

### Push Notifications

To enable push notifications:
1. The user must grant permission
2. The browser creates a subscription
3. The subscription is sent to the server
4. The server can send push messages to the user's device

### Manifest

The manifest.json file enables:
- Installation on devices
- Full-screen mode
- Custom icons
- Theme colors

## Customization

### Colors and Styling

All colors and styling variables are defined in `src/styles/main.css`. You can easily change:
- Colors
- Fonts
- Spacing
- Border radius
- Shadows
- Transitions

### Components

Each component has its own CSS file for component-specific styling. This makes it easy to modify individual components without affecting others.

## WebSocket Connection Issues

If you encounter WebSocket connection errors in the development environment, the webpack.config.js has been updated to fix these issues by configuring the WebSocket client properly.

## Next Steps

1. Create actual icon files for the PWA
2. Set up a backend server for handling push notification subscriptions
3. Implement actual product data and API integration
4. Add more pages (product details, cart, checkout, etc.)
5. Implement user authentication

## Browser Support

This PWA works best in modern browsers that support service workers and push notifications:
- Chrome
- Firefox
- Edge
- Safari (limited push notification support)