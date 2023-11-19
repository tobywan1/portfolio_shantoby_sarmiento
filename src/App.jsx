import Navbar from './components/Navbar'
import Footer from "./components/Footer"


function App() {


  return (
    <div className='w-full h-screen bg-blue-200'>
    <Navbar logo="TB. &copy;" cta="Hire Me!"/>
    <div className='flex flex-col justify-center items-center'>
   <div className='w-full max-w-3xl flex flex-row justify-center'>
   <div className='hero-1 w-full max-w-lg flex flex-col items-start'>

    {/* Name */}
  <div className='uppercase text-5xl'>Hi, I'm Toby, A Software Developer.</div>

  {/* Skills */}
  <div className='flex flex-row gap-4 items-center'>
    <div>Designer</div>
    <div>Figma</div>
    <div>Developer</div>
  </div>

  {/* CTAs */}
  <div className='flex flex-row gap-4 items-center'>
    <button className='px-4 py-1 rounded-full border-2 border-black'> Want to discuss?</button>
    <button className='px-6 py-1 rounded-full border bg-yellow-500'>Let's Talk!</button>
  </div>
   </div>
   <div className="hero-2"><img src="./img/poto.jpg" alt="" className="rounded-full"/></div>
        </div>
      </div>
      <div className='w-full h-screen bg-blue-200'>
      <div className="skill py-20">
        <div className="text-center text-3xl font-extrabold bg-slate-400 py-3">About Me</div>
        <div className="flex flex-row gap-20 items-center justify-between py-10">
          <div className="p-5 font-light text-1xl uppercase">My skills include HTML, CSS, and JavaScript for building responsive and interactive web applications. I specialize in
        front-end development using React, creating user interfaces that are both visually appealing and highly functional.
        On the back end, I'm proficient in Python, a versatile language that I use for server-side development and scripting.
        I also have experience with C++, known for its efficiency and performance, particularly in system-level programming.
          </div>
          <div className="flex flex-col h-40 w-80 gap-20">
          
            </div>
          <div className="flex flex-col h-40 w-80 gap-20">
            <img src="./img/html.webp" alt="" className="object-cover"/>
            <img src="./img/python.png" alt="" className="object-cover"/>
            </div>
          <div className="flex flex-col h-40 w-80 gap-20 mr-20">
            <img src="./img/css.png" alt="" className="object-cover"/>
            <img src="./img/c++.png" alt="" className="object-cover"/>
            </div>
            <div className="flex flex-col h-40 w-80 gap-20 mr-20">
            <img src="./img/javascript.png" alt="" className="object-cover"/>
            <img src="./img/react.png" alt="" className="object-cover" />
            </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

   
  
export default App