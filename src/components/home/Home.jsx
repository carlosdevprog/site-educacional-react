import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Hblog from './Hblog';
import Hprice from './Hprice';
import Hero from './hero/Hero';
import Testimonial from './testiomonal/Testimonal';

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutCard/>
            <HAbout/>
            <Testimonial/>
            <Hblog/>
            <Hprice/>
        </>
    )
}

export default Home