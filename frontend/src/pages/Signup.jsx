import { useState } from "react"
import "./signup.css"
import { useNavigate } from "react-router-dom"

function AuthForm() {
    const [isSignup, setIsSignup] = useState(true); 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handelSignup = (e) => {
        e.preventDefault();

        if(isSignup){

            if(password != confirmPassword){
                alert("Password does not match!");
                return;
            }
            
            console.log('Signup Data:', {
                name,
                email,
                password,
                confirmPassword: confirm,
            });
            
            alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
        }
        else{
            console.log("Login Data:", {
                email,
                password,
            });

            alert(`Login successful!\nEmail: ${email}`);
        }
        navigate("/"); 
    } 

    const toggleMode = () => {
        setIsSignup(!isSignup);
        // clear form fields when toggling
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="page-container">
            <div className="auth-container">
                <form onSubmit={handelSignup} className="form">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        required
                        />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        />
                    {isSignup && (
                        <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        />
                    )}
                    <button type="submit">{isSignup ? "Signup" : "Login"}</button>
                </form>
                <p>
                    {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button onClick={toggleMode} className="toggle-button">
                        {isSignup ? "Login" : "Signup"}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default AuthForm;