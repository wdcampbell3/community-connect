import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics';
import { browser } from '$app/environment';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCCl28zGpOyLtp8XrdHwQDE2EVEZU0UzHA',
	authDomain:
		import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'communityconnect-b0d0c.firebaseapp.com',
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'communityconnect-b0d0c',
	storageBucket:
		import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'communityconnect-b0d0c.firebasestorage.app',
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '7506800121',
	appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:7506800121:web:1f70d1e6dcfc86a07f2128',
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-KZE756XN9Z'
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let analytics: Analytics | null = null;

// Only initialize on client side
if (browser) {
	// Check if Firebase app is already initialized
	if (!getApps().length) {
		app = initializeApp(firebaseConfig);
	} else {
		app = getApps()[0];
	}

	auth = getAuth(app);
	db = getFirestore(app);

	// Initialize analytics only in browser and if supported
	isSupported().then((supported) => {
		if (supported) {
			analytics = getAnalytics(app);
		}
	});
}

export { app, auth, db, analytics };
