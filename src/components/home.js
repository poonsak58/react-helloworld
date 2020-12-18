import Layout from './layout/layout';

const Home = () => {
    return (
        <>
            <Layout title="หน้าแรก">
                <div className="container">
                    <div class="jumbotron">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home