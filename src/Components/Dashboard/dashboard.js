import react from "react";
import Header from "../Header/header";
import { logout } from '../firebase/fire'
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();
    const logoutDashboard = () => {
        logout()
        history.push('/')

    }
    return (
        <>
            <Header></Header>
            <h1 className="center">Dashboard Page</h1>
            <button className="btn btn-danger" onClick={logoutDashboard}>Logout</button>
        </>
    );
}