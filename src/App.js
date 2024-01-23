
import { React } from 'react';
import { Navbar, HeroSection, Section, DownloadSection, Footer } from './components'

import section1Image from './images/section1Image.svg'
import section2Image from './images/section2Image.svg'
import section3Image from './images/section3Image.svg'



function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
      <Navbar />
      <HeroSection />

      <Section
        image={section1Image}
        heading='Create an invite-only place where you belong'
        desc='Discord servers are organized into topic-based channels where you can collaborate, share, 
              and just talk about your day without clogging up a group chat.'

      />

      <Section
        image={section2Image}
        heading='Where hanging out is easy'
        desc='Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around 
              and instantly pop in to talk without having to call.'
        reverse={true}
        extraStyle={'bg-[#f6f6f6]'}
      />

      <Section
        image={section3Image}
        heading='From few to a fandom'
        desc='Get any community running with moderation tools and custom member access. 
              Give members special powers, set up private channels, and more.'
      />


      <DownloadSection />
      <Footer />

    </div>
  );
}

export default App;
