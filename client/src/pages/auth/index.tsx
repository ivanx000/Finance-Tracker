import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import './Auth.css'; // CSS file for styles

export const Auth = () => {
    return (
        <div className="auth-container">
            <SignedOut>
                <div className="auth-box">
                    <h1 className="auth-title">Welcome</h1>
                    <p className="auth-subtitle">Access your account or join us today.</p>
                    <div className="auth-buttons">
                        <SignUpButton mode="modal">
                            <button className="custom-button sign-up">Sign Up</button>
                        </SignUpButton>
                        <SignInButton mode="modal">
                            <button className="custom-button sign-in">Sign In</button>
                        </SignInButton>
                    </div>
                </div>
            </SignedOut>
            <SignedIn>
                <Navigate to="/" />
            </SignedIn>
        </div>
    );
};
