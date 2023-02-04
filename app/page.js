import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='page'>
    <Navbar />
    <Hero />
    <div style={{ position: 'relative' }}>
      <About />
      <div className='gradient-03'></div>
      <Explore />
    </div>
    <div style={{ position: 'relative' }}>
      <GetStarted />
      <div className='gradient-04'></div>
      <WhatsNew />
    </div>
    <div style={{ position: 'relative' }}>
      <World />
      <div className='gradient-04'></div>
      <Insights />
    </div>
    <Feedback />
    <Footer />
  </div>
);

export default Page;
