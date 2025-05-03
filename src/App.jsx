import React, { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
  }, []);

  const tasks = [
    { "id": 1, "title": "Task 1 : Expectation Document", "description": "_", "path": "task1/index.html" },
    { "id": 2, "title": "Task 2: Basic HTML Styling", "description": "", "path": "task2/indexss.html" },
    { "id": 3, "title": "Task 3: CSS Hover", "description": "_", "path": "task3/HTMLPage2.html" },
    { "id": 4, "title": "Task 4: Welcome to JS", "description": "", "path": "task4/index.html" },
    { "id": 5, "title": "Task 5: Calculator with JS", "description": "_", "path": "task5/jan30as2.html" },
    { "id": 6, "title": "Task 6: GitHub Integration", "description": "", "path": "task6/index.html" },
    { "id": 7, "title": "Task 7: Console Output", "description": "_", "path": "task7/console.js" },
    { "id": 8, "title": "Task 8: String Operation", "description": "", "path": "task8/feb4.html" },
    { "id": 9, "title": "Task 9: Conditions", "description": "_", "path": "task9/day5.html" },
    { "id": 10, "title": "Task 10: Call-Stack with Array", "description": "", "path": "task10/day5_2.html" },
    { "id": 11, "title": "Task 11: Star with Loops", "description": "", "path": "task11/feb11.html" },  
    { "id": 12, "title": "Task 12: Class Work", "description": "", "path": "task12/feb13.html" },
    { "id": 13, "title": "Task 13: Class Work - Objects", "description": "", "path": "task13/feb18.html" },
    { "id": 14, "title": "Task 14: Class Work - Objects 2", "description": "", "path": "task14/feb20.html" },
    { "id": 15, "title": "Task 14b: Class Work - Functions ", "description": "_", "path": "task14b/feb25.html" },
    { "id": 16, "title": "Task 15: Class Work - Class & Bootstrap", "description": "", "path": "task15/mar11task.html" },
    { "id": 17, "title": "Task 15b: Age Calculator", "description": "", "path": "task15b/mar11.html" },
    { "id": 18, "title": "Task 16: Class Work - JSON ", "description": "_", "path": "task16/mar13.html" }
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h1>S</h1>
          <p>
            Sai Kiran Akireddy
            <br />
            Web Developer
          </p>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/saikiran-varma" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <section id="home" className="section hero" data-aos="fade-up">
          <h1>Hi, I'm <span>Sai Kiran</span>,</h1>
          <h2>Electrical & Web Engineer</h2>
          <p>Passionate about technology and innovation</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </section>

        <section id="about" className="section" data-aos="fade-up">
          <h2>About Me</h2>
          <div className="about-content">
            <img src="/profile.jpg" alt="Sai Kiran Akireddy" className="profile-pic" />
            <p>
              I am Sai Kiran Akireddy, an aspiring Electrical and Web Engineer looking for a full-time opportunity to secure the best position in an organization. I aim to employ my effective communication skills and willingness to learn to increase profitability and contribute to the growth of the organization.
            </p>
          </div>
        </section>

        <section id="experience" className="section" data-aos="fade-up">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Internship: Programming in Java (NPTEL)</h3>
              <p><em>2022</em></p>
              <p>Completed an internship focused on Java programming, earning a certification from SkillUp.</p>
            </div>
            <div className="timeline-item">
              <h3>Internship: Smart Irrigation System</h3>
              <p><em>2021</em></p>
              <p>Developed a smart irrigation system to automate and optimize water usage for agricultural applications.</p>
            </div>
            <div className="timeline-item">
              <h3>Internship: Underground Cable Distance and Fault Location Identification</h3>
              <p><em>2021</em></p>
              <p>Worked on a project using PIC 16F73 microcontroller to identify underground cable faults and their locations.</p>
            </div>
            <div className="timeline-item">
              <h3>Internship: Collision Avoidance System</h3>
              <p><em>2020</em></p>
              <p>Designed a collision avoidance system to enhance safety through automation.</p>
            </div>
            <div className="timeline-item">
              <h3>Internship: Study of Manufacturing Process of Turbo Generator (BHEL)</h3>
              <p><em>2020</em></p>
              <p>Studied the manufacturing process of turbo generators at BHEL, gaining insights into industrial engineering.</p>
            </div>
          </div>
        </section>

        <section id="education" className="section" data-aos="fade-up">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Master's in Computer Science</h3>
              <p><em>Auburn University at Montgomery, 12/2025</em></p>
              <p>Currently pursuing a Master's degree in computer science with a focus on software development and algorithms.</p>
            </div>
            <div className="timeline-item">
              <h3>Bachelor of Technology in Electrical and Electronic Engineering</h3>
              <p><em>J.B. Institute of Engineering & Technology, 06/2022</em></p>
              <p>Graduated with a focus on electrical engineering and technology.</p>
            </div>
            <div className="timeline-item">
              <h3>Diploma in Electrical and Electronic Engineering</h3>
              <p><em>Mahaveer Institute of Science & Technology, 05/2019</em></p>
              <p>Completed a diploma with hands-on training in electrical systems.</p>
            </div>
            <div className="timeline-item">
              <h3>Secondary School Certificate</h3>
              <p><em>Trinity High School, 04/2016</em></p>
              <p>Completed secondary education with a strong academic foundation.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section" data-aos="fade-up">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Java</li>
            <li>Typing</li>
            <li>PIC Microcontrollers</li>
            <li>Smart Systems</li>
            <li>Electrical Engineering</li>
            <li>Communication</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Problem Solving</li>
          </ul>
        </section>

        <section id="work" className="section" data-aos="fade-up">
  <h2>Projects</h2>
  <div className="task-buttons">
    {tasks.map(task => (
      <a
        key={task.id}
        href={task.path}
        target="_blank"
        rel="noopener noreferrer"
        className="task-button"
      >
        {task.title}
      </a>
    ))}
  </div>
</section>

        <section id="contact" className="section" data-aos="fade-up">
          <h2>Contact</h2>
          <p>I'm excited to connect and explore opportunities. Reach out to me!</p>
          <p><i className="fas fa-map-marker-alt" style={{ color: "#00c4b4", marginRight: "8px" }}></i> Montgomery, Alabama</p>
          <p><i className="fas fa-phone"></i> <a href="tel:+19432447995">+1 943-244-7995</a></p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:sakired1@edu.aum">sakired1@edu.aum</a></p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/saikiran-varma" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" style={{ color: "#00c4b4" }}></i> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;