// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyD9Cc2QJrKHq2BPXzmFQH5IqKvJNgqnwQ4",
    authDomain: "laravelnotification-b3e33.firebaseapp.com",
    projectId: "laravelnotification-b3e33",
    storageBucket: "laravelnotification-b3e33.appspot.com",
    messagingSenderId: "344784149019",
    appId: "1:344784149019:web:6d75922992f702d34336be",
    measurementId: "G-8Y4PEF4D89"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "First Try";
    const options = {
        body: "Sucessfully Done.",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});
