import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [addDetail, setAddDetail] = useState(null);

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    console.log(user);


    const ProviderLogin = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    //register
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logOut
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    // Call from Sign up form.
    const UpdateUser = (username, category, email) => {

        if (email === 'admin@gmail.com') {
            category = 'Admin';
        }

        return updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: category
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);

        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, ProviderLogin, createUser, signIn, logOut, loader, UpdateUser, setAddDetail, addDetail };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;