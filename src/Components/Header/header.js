import react from "react";
import Logo from '../../Assets/logo.png'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid" style={{ 'textAlign': 'center', 'display': 'inline-block' }}>
                    <img src={Logo} className="img-fluid rounded img-thumbnail" style={{ 'width': '200px' }} />
                </div>
            </nav>
        </>
    );
}