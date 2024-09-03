import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Simple Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#4a90e2',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;