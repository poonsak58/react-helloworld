const Footer = () => {

    const company = "aaa"
    const email = "a@a.com"
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/channel/UC2G461-Y8FlRLGElEz6cL3Q" target="_blank" style={{ color: 'red' }}>
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/Fuey-Gamer-2061476510755962" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/poonsak58" target="_blank" style={{ color: 'black' }}>
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <p className="copyright my-3">
                                <span className="text-danger">Powered By. <span className="text-muted">{company}</span></span> | <span className="text-danger">Contact <span className="text-muted">{email}</span></span>
                            </p>
                            <p>
                                <span className="copyright text-muted d-block">Copyright &copy; 2020</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer