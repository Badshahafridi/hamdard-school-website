import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth();

/**
 * Validates connection to Firestore on boot
 */
async function testConnection() {
  try {
    // Testing specific collection targeted by rules
    await getDocFromServer(doc(db, 'system', 'connection-test'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firebase is offline. Check network or configuration.");
    }
  }
}
testConnection();

export interface AdmissionData {
  childName: string;
  classSelection: string;
  contactNumber: string;
}

export async function submitAdmission(data: AdmissionData) {
  try {
    const docRef = await addDoc(collection(db, 'admissions'), {
      ...data,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore Error:", error);
    throw new Error(JSON.stringify({
      error: error instanceof Error ? error.message : "Unknown error",
      operationType: 'create',
      path: 'admissions',
      authInfo: {
        userId: auth.currentUser?.uid || 'anonymous',
        email: auth.currentUser?.email || 'none',
        emailVerified: auth.currentUser?.emailVerified || false,
        isAnonymous: auth.currentUser?.isAnonymous || true,
        providerInfo: auth.currentUser?.providerData || []
      }
    }));
  }
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: 'holiday' | 'exam' | 'event' | 'deadline';
  description?: string;
}

export function subscribeToCalendar(callback: (events: CalendarEvent[]) => void) {
  return onSnapshot(
    query(collection(db, 'academicCalendar'), orderBy('date', 'asc')),
    (snapshot) => {
      const events = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CalendarEvent[];
      callback(events);
    },
    (error) => {
      console.error("Calendar Sync Error:", error);
    }
  );
}
