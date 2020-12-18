import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Cafe</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/">
                                <a class="nav-link" href="#">หน้าแรก</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/users">
                                <a class="nav-link" href="#">ข้อมูลผู้ใช้</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about">
                                <a class="nav-link" href="#">เกี่ยวกับเรา</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header