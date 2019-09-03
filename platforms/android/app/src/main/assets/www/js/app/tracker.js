var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Tracker',
    // App id
    id: 'net.peiryd.tracker',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ],
    // ... other parameters
  });