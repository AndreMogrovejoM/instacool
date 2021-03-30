import * as firebase from './firebase'
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseFirestore } from '@firebase/firestore-types';

const services = {
    ...firebase,
}

export interface IServices {
    auth: FirebaseAuth
    firestore: FirebaseFirestore
    storage: FirebaseStorage
    
}

export default services