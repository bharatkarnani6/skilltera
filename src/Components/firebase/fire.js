import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDw2KTe7D7YhRGC-euK8GTkrXtbZXtZdPg",
    authDomain: "skillera-login-signup.firebaseapp.com",
    projectId: "skillera-login-signup",
    storageBucket: "skillera-login-signup.appspot.com",
    messagingSenderId: "326447299833",
    appId: "1:326447299833:web:22e0146dd4a773a114f628"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const storage = app.storage()

const dataStore = (resume) => {
    const uploadTask = storage.ref(`resume/${resume.name}`).put(resume);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            //

        },
        (error) => alert(error),
    );
};
const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password, resume) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            resume,
        }).then(res => {
            alert("New Account Created")
        })
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};
export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    dataStore,
};

