import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth, db } from "../credentials/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        loading: false,
    });

    const history = useNavigate();
    const {email, password, loading } = data;

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    };

    const signInWithGoogle = async e=>{
        e.preventDefault();
        try{
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            history("/");
        }catch(err){
            setData({ ...data, loading: false });
        }
    }

    const signInWithGithub = async e=>{
        e.preventDefault();
        try{
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            history("/");
        }catch(err){
            setData({ ...data, loading: false });
        }
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setData({ ...data, loading: true })
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            await updateDoc(doc(db, 'users', result.user.uid),{
                isOnline: true,
            });
            setData({
                email: "",
                password: "",
                loading: false,
            });
            history("/");
        }catch(err){
            setData({ ...data, loading: false });
            alert("Usuario o contraseña incorrecta");
        }
    }

    return (
        <section>
        <form className="form-login" onSubmit={handleSubmit} >
            <h2>Sign In to Chatty</h2>
            <br/>
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
                    {loading ? "Creating ..." : "Sign In"}
                </button>
            </div>
            <div className="col-20">
                <br/>
                <button className="btn btn-primary active"  type="submit" onClick={signInWithGoogle}>
                    Sign In with Google
                </button>
            </div>
            <div className="col-20">
                <br/>
                <button className="btn btn-success active"  type="submit" onClick={signInWithGithub}>
                    Sign In with Github
                </button>
            </div>
        </form>
        </section>
     );
}

export default Login;