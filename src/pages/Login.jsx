import { signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, googleProvider } from '../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [user, setUser] = useState(null)
    const [show, setShow] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password });

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        const firebaseErrorMessages = {
        "auth/invalid-email": "That email doesn’t look right.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again.",
        "auth/missing-password": "Please enter your password.",
        "auth/too-many-requests": "Too many attempts. Take a break.",
        "auth/network-request-failed": "Network issue. Check your connection.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/invalid-credential": "Your email or password is incorrect.",
    };

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                setUser(res.user)
                toast.success("Login Successful");
            })
            .catch((error) => {
                const errorMessage = firebaseErrorMessages[error.code];
                toast.error(errorMessage);
            });
    };

    const handleLoginByGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
                console.log(res);
                setUser(res.user)
                toast.success("Login Successful");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    }

    const  handleSignout = () => {
        signOut(auth)
        .then(()=> {
            toast.success("signout successful")
            setUser(null)
        })
    }

    console.log(user)

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-zinc-900 w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-800">
                
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-white mb-2">
                    Welcome Back to <span className="text-red-500">GameHub</span>
                </h2>
                <p className="text-gray-400 text-center text-sm mb-6">
                    Explore your favorite games
                </p>

                {/* Form */}
                {user?

                (<div className='text-center space-y-3'>
                    <img 
                    src={user?.photoURL}
                    className='h-20 w-20 rounded-full mx-auto'
                     />

                     <h2 className='text-xl font-semibold text-white'>{user?.displayName}</h2>

                     <p className='text-white'>{user?.email}</p>

                     <button className='px-4 py-2 bg-red-500' onClick={handleSignout}>Sign Out</button>

                </div>)
                
                : (<form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-red-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-gray-300 text-sm mb-1">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 rounded-md bg-zinc-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-red-500"
                            required
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="text-white absolute right-2 top-9 cursor-pointer"
                        >
                            {show ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition-all duration-300"
                    >
                        Login
                    </button>
                </form>)}

                {/* or */}
                <div className="flex items-center justify-center my-4">
                    <hr className="h-px w-26 border-gray-700" />
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <hr className="h-px w-26 border-gray-700" />
                </div>

                {/* Login through Google */}
                <button onClick={handleLoginByGoogle} className="w-full bg-white text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 flex justify-center items-center gap-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Register Redirection */}
                <p className="text-gray-400 text-sm text-center mt-6">
                    New to GameHub?{" "}
                    <Link to="/register" className="text-red-500 hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
