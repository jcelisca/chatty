import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../credentials/firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        loading: false
    });

    const history = useNavigate();
    const {name, email, password, loading } = data;

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        setData({ ...data, loading: true });
        try{
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', result.user.uid),{
                uid: result.user.uid,
                name,
                email,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true,
            });
            setData({
                name: "",
                email: "",
                password: "",
                loading: false,
            });
            history("/");
        }catch(err){
            setData({ ...data, loading: false });
            console.log(err.message);
        }
    }

    return (
        <section>
        <form className="form-login" onSubmit={handleSubmit} >
            <h2>Sign Up to Chatty</h2>
            <br/>
            <div className="col-md-10">
                <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={handleChange} minLength="4" required/>
                    <div className="invalid-feedback">
                        Please provide a valid name.
                    </div>
            </div>
            <br/>
            <div className="col-md-10">
                <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
                    <div className="invalid-feedback">
                        Please provide a valid email.
                    </div>
            </div>
            <div className="col-md-10">
                <br/>
                <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={handleChange} minLength="6" required/>
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
            </div>
            <div className="col-12">
                <br/>
                <button className="btn btn-primary" type="submit" disabled={loading}>
                    {loading ? "Creating ..." : "Sign Up"}
                </button>
            </div>
        </form>
        </section>
     );
}

export default Register;