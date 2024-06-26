import './AboutMe.css'
import DP from '../../assets/DP.jpeg'


function AboutMe() {
    return ( 
        <div className="container">
         <div className='half'>
           <h1 className='welcome-heading'>Welcome to My Portfolio</h1>
           <h4>About Me</h4>
           <p>Hello! My name is Mehamood Rabban, and I am delighted to welcome you to my portfolio. I am a passionate and dedicated individual with a keen interest in web development, particularly using React. My goal is to create intuitive and dynamic user experiences that captivate and engage users.
               With a strong foundation in modern web technologies, I have been able to craft and contribute to a variety of projects that demonstrate my ability to blend creativity with functionality. My journey in web development began a few years ago and has been marked by continuous learning, creative problem-solving, and a commitment to excellence.</p>
           <h4>My Philosophy</h4>
           <p>I believe that the intersection of creativity and technology offers limitless possibilities. My approach is driven by a desire to not only meet but exceed expectations, ensuring that every project I work on is both visually appealing and functionally robust. I am constantly exploring new techniques and staying up-to-date with industry trends to bring fresh and innovative ideas to life.</p> 

         </div>
         <div className='half'>
           <p>To become familiar of my education,skills,projects</p>
           <button>Click Here</button>
            
         </div>
        </div>
     );
}
 
export default AboutMe;


