import react from "react";
import { useForm } from "react-hook-form";
import { registerWithEmailAndPassword } from "../firebase/fire";
import { dataStore } from "../firebase/fire";

export default function Signup(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data, e) => {
        if (data.password === data.confpassword) {
            dataStore(data.resume[0])
            registerWithEmailAndPassword(data.name, data.email, data.password, data.resume[0].name)
        } else {
            alert("Confirm Password is not matching")
        }
        e.target.reset();
    };

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create an Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-body">

                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Bharat" {...register('name', { required: true })} />
                                    <p style={{ 'color': 'red' }}>{errors.name?.type === 'required' && "name is required"}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register('email', { required: true })} />
                                    <p style={{ 'color': 'red' }}>{errors.email?.type === 'required' && "Email is required"}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" {...register('password', { required: true })} />
                                    <p style={{ 'color': 'red' }}>{errors.password?.type === 'required' && "Password is required"}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Confirm Password" {...register('confpassword', { required: true })} />
                                    <p style={{ 'color': 'red' }}>{errors.confpassword?.type === 'required' && "Confirm Password is required"}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Upload Resume</label>
                                    <input type="file" className="form-control" aria-label="file example" {...register('resume', { required: true })} />
                                    <p style={{ 'color': 'red' }}>{errors.resume?.type === 'required' && "resume is required"}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}