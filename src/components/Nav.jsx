// import logo from '../assets/img/b-logo.png';
import logo from '../assets/img/Nest-fit.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href={'/'}><img style={{width: 80}} src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" aria-current="page" href="#">Programs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-warning" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href={'/editactivity'}>Edit Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href={'/createactivity'}>Create Activity</a>
                            </li>
                        </ul>
                        <ul className="d-flex" style={{listStyleType:"none"}}>
                            <li className="nav-item">
                                <button className="btn btn-light" type="submit"><a href={'/login'}>Log In</a></button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">&nbsp;</a>
                            </li>
                            <li className="nav-item">
                            <button className="btn btn-outline-warning" type="submit"><a href={'/signup'}>Sign Up</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar