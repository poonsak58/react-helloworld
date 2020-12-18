import Header from './header';
import Footer from './footer';
import { Helmet } from 'react-helmet'

const Layout = ({title, children}) => {
    // console.log('props layouer', props);
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout