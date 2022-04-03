import React, { useState, useEffect } from "react";
import { auth, db } from "../credentials/firebase";
import { getDoc, doc } from "firebase/firestore";

const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
            if (docSnap.exists) {
                setUser(docSnap.data());
            }
        });
    }, []);

    return user ? (
        <section>
            <h1>Wellcome</h1>
            <div className="text_container">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <hr />
                <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
            </div>
        </section>
    ) : (
        <h1>Loading...</h1>
    )
}

export default Profile;