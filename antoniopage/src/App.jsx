import { useState, useRef, useEffect } from 'react';
import './App.css'
import GitHublogo from './icons/Github'
import GitHubLink from './icons/Githublink'
import CSSlogo from './icons/CSS'
import HTMLlogo from './icons/Html'
import JavaScriptlogo from './icons/JavaScript'
import Nodejslogo from './icons/nodejs'
import Linkedinlogo from './icons/Linkedin'
import CPPlogo from './icons/CPP'
import Clogo from './icons/C'
import Gitlogo from './icons/Git'
import GitHubprofile from './icons/GitHubprofile'

function App() {
  const [count, setCount] = useState(0)
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);  // Deja de observar el elemento una vez que es visible
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  
  return (
  <div style={{ color: '#1F1717' }} className="font-sans font-family:sans-serif font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark leading-base">
    
    
    
    <body className="bg-transparent">
      <p className="font-sans text-[2.2rem] lg:text-[2.7rem] mb-12 font-light text-center mt-5 md:mt-10">Welcome to my personal page!</p>
      <header className="sticky top-4  ml-[5em] w-full z-50">
        <nav className="relative ">
          <div style={{ color: '#E0EAF3', opacity: '80%' }} className="bg-current mt-2 rounded-lg opacity-[100%] hidden w-auto md:block ml-[5em] mr-[15em]" id="navbar-default">
            <ul style={{ color: '#1F1717' }} className="font-normal flex flex-cols-3 md:p-0 mt-4 gap-14 mt-0 justify-center inline-block">
              <li>
                <a href="#section1" className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Skills</a>
              </li>
              <li>
                <a href="#section2" className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Projects</a>
              </li>
              <li>
                <a href="#section3" className="text-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-blue-700">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
      <img src="/antonio.png" alt="Antonio" className="rounded-lg h-auto w-[350px] mx-auto mt-4 mb-10 " />
      
      
      <p className="tracking-wide md:mx-[8em] lg:mx-[15em] text-center mt-5 mb-5 font-light">Hi, I'm Roberto Antonio Navarro Estrada, an<span style={{color: '#1F1717' }} className="px-2 font-normal">Artificial Intelligence Engineering</span>student with a deep passion for <span className='font-normal'>algorithms</span> and <span className='font-normal'>maths</span>.</p>
      <p class="tracking-wide md:mx-[8em] lg:mx-[15em] text-center mb-5 font-light">Though I may not have professional experience yet, I'm dedicated to honing my skills through personal projects. My goal is to <span className='font-normal'>master</span> the <span className='font-normal'>tools</span> and technologies that drive innovation in the industry.</p>
      <p class="tracking-wide md:mx-[8em] lg:mx-[15em] text-center mb-5 font-light">Currently, I'm diving into <span className='font-normal'>web development</span>, learning to create dynamic and responsive web applications using tools like CSS, HTML5, Node.js, JavaScript, and React. Also, as a member of my school's <span className='font-normal'>Algorithmics Club</span>, I am continuously improving my algorithmic skills in preparation for the ICPC, the most prestigious competitive programming event.</p>
      
      <h2 id="section1" ref={el => sectionsRef.current[0] = el} class="text-[2.5rem] fade-in-section lg:text-[3.0rem] font-light text-center mt-14 mb-14">Skills</h2>
      <h3 ref={el => sectionsRef.current[1] = el} className='fade-in-section text-center mt-5 text-2xl lg:text-3xl font-normal'>Performing </h3>
      <div ref={el => sectionsRef.current[2] = el} className="fade-in-r-section flex flex-cols-3 gap-10 mt-10 items-center justify-center inline-block">
      <div className="flex flex-rows-2 items-center justify-center">
          <Clogo />
          <p className='hidden md:block ml-3 mr-[0.8em]'>C</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center">
          <CPPlogo />
          <p className='hidden md:block ml-3'>C++</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center">
          <HTMLlogo />
          <p className='hidden md:block ml-3'>HTML</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center">
          <GitHublogo className=''/>
          <p className='hidden md:block ml-3'>GitHub</p>
        </div>
        
      </div>
      
      <h3 ref={el => sectionsRef.current[3] = el} className='fade-in-section text-center text-2xl lg:text-3xl font-normal mt-[2em]'>Learning</h3>
      <div ref={el => sectionsRef.current[6] = el} className="fade-in-l-section font-normal flex flex-cols-3 gap-10 mt-10 items-center justify-center inline-block">
        <div className="flex flex-rows-2 items-center justify-center inline-block">
          <Nodejslogo/>
          <p className='hidden md:block ml-3'>Node.js</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center">
          <CSSlogo />
          <p className='hidden md:block ml-3'>CSS</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center ">
          <JavaScriptlogo />
          <p className='hidden md:block ml-3'>JavaScript</p>
        </div>
        <div className="flex flex-rows-2 items-center justify-center">
          <Gitlogo />
          <p className='hidden md:block ml-3'>Git</p>
        </div>
      </div>
      
      <h2  ref={el => sectionsRef.current[7] = el} id="section2" className="fade-in-section text-[2.5rem] lg:text-[3.0rem] font-light text-center mt-14 mb-14">Projects</h2>
      <section  ref={el => sectionsRef.current[8] = el} class="fade-in-section bg-transparent">
        <div ref={el => sectionsRef.current[7] = el} class="fade-in-section py-8 px-4 mx-auto max-w-screen-sm lg:max-w-screen-md" >
          <div  class="bg-transparent border border-gray-700 p-8 lg:p-12">
            
            <h1 style={{ color: '#1F1717' }} class="text-white text-3xl lg:text-[2.8rem] font-normal mb-8">DevInterview</h1>
            <p style={{ color: '#1F1717' }} class="text-sm font-normal mb-6">Collaborators: <span href="https://github.com/mvnueloc" className="hover:underline">@mvnueloc</span> <span href="https://github.com/danielctecla" className="hover:underline">@danieltecla</span>.</p>
            <p style={{ color: '#1F1717' }}class="text-lg font-light mb-6">Get Ready for Technical Interviews! Leverage the power of Vercel SDK AI API to test your skills and assess your readiness for the job of your dreams</p>
            <a style={{ color: '#1F1717' }} href="https://devinterview.vercel.app/" class="hover:underline inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white hover:text-blue-500 focus:ring-blue-300 dark:focus:ring-blue-900">
              Try it!
              
            </a>
          </div>
          <div ref={el => sectionsRef.current[13] = el} class="fade-in-l-section grid md:grid-cols-2">
            <div style={{ color: '#1F1717' }} class="bg-transparent border border-gray-700 p-8 lg:p-12">
              
              <h2  class="fade-in-section text-2xl lg:text-[1.8rem] font-normal mb-5">Guard IA</h2>
              <p style={{ color: '#1F1717' }} class="text-sm font-normal mb-6">Collaborators: <span href="https://github.com/mvnueloc" className="hover:underline">@mvnueloc</span> <span href="https://github.com/charlyguz" className="hover:underline">@charlyguz</span>.</p>
              <p  class="text-md lg:text-lg font-light  mb-4">AI Model Powered by YOLO v5 for Theft Detection.</p>
              <a  style={{ color: '#1F1717' }} href="https://charlyguz.github.io/landing/" class="hover:underline font-normal text-[1.1rem] lg:text-lg inline-flex items-center">Read more
                
              </a>
            </div>
            <div ref={el => sectionsRef.current[14] = el} style={{ color: '#1F1717' }} className="fade-in-r-section border border-gray-700 p-8 md:p-12 bg-blend-color-luminosity flex flex-col items-center justify-center ">
              <h2  style={{ color: '#1F1717' }} className=" text-[1.8rem] font-normal mb-10 mt-6">My competitive programming solves</h2>
              <GitHubLink />
            </div>
            
          </div>
        </div>
      </section>
      <section>
      <p ref={el => sectionsRef.current[16] = el} className='fade-in-l-section text-xl lg:text-[2.2rem] font-light text-center mt-14 lg:mb-14'>No experience...</p>
        <div className=' flex flex-col lg:flex-row gap-5 lg:gap-[5em] rounded-xl mt-10 items-center justify-center'>
          <p ref={el => sectionsRef.current[17] = el} style={{ color: '#1F1717', opacity: '100%' }} className='fade-in-l-section text-xl lg:ml-10 lg:text-[2.2rem] font-light text-center mt-5 mb-1 lg:mt-14 lg:mb-14'>Living experiences :) </p>
          <img ref={el => sectionsRef.current[18] = el} src="/icpc1.png" alt="Antonio" className="fade-in-r-section rounded-lg h-auto w-[300px] lg:w-[300px] mt-[1em] lg:mt-10 mb-10 " />
        </div>
        <div className=' flex flex-col lg:flex-row lg:gap-[2em] mt-10 items-center justify-center'>
          <img ref={el => sectionsRef.current[19] = el} src="/nuevent.png" alt="" className="fade-in-l-section rounded-lg h-auto w-[280px] lg:w-[320px] mb-10 " />  
          <img ref={el => sectionsRef.current[20] = el} src="/icpc3.png" alt="" className="fade-in-section rounded-lg h-auto w-[350px] mb-10 " />
          <img ref={el => sectionsRef.current[21] = el} src="/escom2.png" alt="" className="fade-in-r-section hidden lg:block rounded-lg h-auto w-[320px] mb-10 " />
        </div>
        <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center justify-center'>
  <img ref={el => sectionsRef.current[22] = el} src="/escom.png" alt="" className="fade-in-l-section rounded-lg h-auto w-[400px] mb-10" />
  <img ref={el => sectionsRef.current[23] = el} src="/icpc2.png" alt="" className="fade-in-invert-section rounded-lg h-[325px] w-auto mb-10" />
</div>

      </section>
    </body>
    
    
    <footer>
      <p ref={el => sectionsRef.current[24] = el} className='fade-in-invert-section mt-[4em]'>Let's build something amazing together!❤️</p>
      <h4  id="section3" className="text-[2.0rem] font-light text-center mt-[4em]">Contact Me
        
        <div className="flex flex-row-2 mt-10 gap-6 items-center justify-center">
          
          <div  className="" >
            <Linkedinlogo  />
          </div>

          <div href="" className="" >
            <GitHubprofile  />
          </div>
          
         
        </div>
      </h4>
      
    </footer>
  </div>
  )
}

export default App
