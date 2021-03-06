import react from "react";
import './form.css'
import { useHistory } from "react-router-dom";
import Signup from "../singup/signup";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "../firebase/fire";
import Header from "../Header/header";

export default function Form() {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password).then(res => {
            history.push('/dashboard')
        })
    };
    return (
        <>
            <Header />
            <div className="main-box">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" {...register('email', { required: true })} />
                        <p style={{ 'color': 'red' }}>{errors.email?.type === 'required' && "Email is required"}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" {...register('password', { required: true })} />
                        <p style={{ 'color': 'red' }}>{errors.password?.type === 'required' && "Password is required"}</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                        <div className="col-6">
                            <div className="d-grid col-12 mx-auto">
                                <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Signup />
        </>
    );
}