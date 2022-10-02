import { Link } from 'react-router-dom';

export default function NavbarInfo() {
    return (<>
        <div className="col-4 d-none d-md-block">
            <div className="h-100 row d-flex justify-content-center m-0">
                <div className="col-3 px-0 d-flex flex-column justify-content-center align-items-center">
                    <Link className="text-dark h2 m-0 bi bi-person-circle" to={'/login'} />
                </div>
                <div className="px-3 col-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="position-relative">
                        <Link className="text-dark h2 bi bi-cart3" to={'/cart'} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}