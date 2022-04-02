const Login = () => {
    return (
        <div className="abs-center">
        <form className="form-login"  >
            <h1>Sign Up to Chatty</h1>
            <p>Fill in the form below to create an account.</p>
            <div className="col-md-6">
                <input type="email" className="form-control" id="validationCustom01" placeholder="Email" required/>
                    <div className="invalid-feedback">
                        Please provide a valid email.
                    </div>
            </div>
            <div className="col-md-6">
                <br/>
                <input type="password" className="form-control" id="validationCustom02" placeholder="Password" required/>
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
            </div>
            <div className="col-12">
                <br/>
                <button className="btn btn-primary" type="submit">Register</button>
            </div>
        </form>
        </div>
    );
}

export default Login;