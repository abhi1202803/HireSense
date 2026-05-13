import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    // Only initialize if all required env vars are present
    if (projectId && clientEmail && privateKey) {
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    } else {
      // During build time or when env vars are missing, initialize with a placeholder
      // that will be overridden at runtime
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "Firebase Admin SDK: Missing environment variables (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY). " +
          "Firebase Admin features will not work until these are configured."
        );
      }
      // Return empty stubs for build compatibility
      return { auth: null as any, db: null as any };
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
