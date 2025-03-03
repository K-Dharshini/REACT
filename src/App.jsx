
import './App.css'

function App() {
  

  return (
    <>
      <header className="header">
        <div className="logo">DHARSHINI K</div>
        <nav className="nav-links">
            <a href="1">EDUCATION</a>
            <a href="2">SKILLS</a>
            <a href="3">EXPERIENCE</a>
            <a href="4">PROFILE</a>
            <a href="5">PORTFOLIO</a>
            <a href="6">CLIENTS</a>
            <a href="7">CONTACT</a>
        </nav>
    </header>
    
    <section className="hero">
        <div className="hero-content">
            <h1>HI<span>,</span> I AM <br /> DHARSHINI<span>.</span></h1>
            <p>Artificial Intelligence and Data Science Engineer</p>
            <a href="8" className="resume-btn">Download Resume</a>
        </div>
    </section>
    <section className="about-section">
        <h2>ABOUT ME</h2>
        <div className="about-content">
            <div className="about-text">
                <p>
                    I am Dharshini K, an aspiring AI and Data Science Engineer passionate about leveraging technology 
                    to solve real-world problems. I have a strong foundation in machine learning, data science, automation, and cryptography, 
                    and I love exploring new advancements in artificial intelligence.
                </p>
                <p>
                    I have completed various certifications in data science, cryptography, and robotic process automation. 
                    My expertise includes Python, JavaScript, SQL, and working with AI-based frameworks.
                </p>
                <div className="contact-info">
                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p>+91 9500254201</p>
                    </div>
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p>k.dharshini800@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h4>Website</h4>
                        <p>www.dharshini_k.com</p>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src="/images/KD.jpg" alt="Dharshini K" />
                <div className="social-links">
                    <a href="https://github.com/K-Dharshini" target="_blank">🔗 GitHub</a>
                    <a href="https://www.linkedin.com/in/dharshini-k-b0857328a/" target="_blank">🔗 LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
    <section className="education-section">
        <h2>EDUCATION</h2>
        <div className="timeline">
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2008 - 2023</strong><br /><br /><br />1st to 12th Grade<br />SAN ACADEMY</p>
            </div>
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2023 - 2027 (Pursuing)</strong><br /><br /><br />B.Tech AIDS<br />Saveetha Engineering College</p>
            </div>
            <div className="timeline-item">
                <div className="dot"></div>
                <p><strong>2028 - 2030 (Future Plan)</strong><br /><br /><br /><br /></p>
            </div>
        </div>
    </section>
    <section className="skills-section">
        <h2>SKILLS</h2>
        <div className="skills-container">
            <div className="skills-column">
                <div className="skill">
                    <p>Python Programming</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "90%"}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Data Structure Algorithm</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "85%"}}></div>
                        <span className="progress-percentage">85%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Java OOPS</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "97%"}}></div>
                        <span className="progress-percentage">97%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>C Programming Language</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "90%"}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
            </div>
            <div className="skills-column">
                <div className="skill">
                    <p>Data Science</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "90%"}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>ML Algorithms</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "85%"}}></div>
                        <span className="progress-percentage">85%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>SQL</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "97%"}}></div>
                        <span className="progress-percentage">97%</span>
                    </div>
                </div>
                <div className="skill">
                    <p>Problem Solving</p>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{width: "90%"}}></div>
                        <span className="progress-percentage">90%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section">
        <div className="contact-section-title">
            <h2>CONTACT ME</h2>
        </div>
        <div className="contact-section-content">
            <form>
                <div className="name-email">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" id="Subject" />
                <input type="text" placeholder="Message" id="message" />
                <button>Submit</button>
            </form>
            <div className="contact-details">
                <div className="line-1">
                    <h1>Dharshini</h1>
                    <p>Engineer</p>
                </div>
                <div className="line-1">
                    <h1>Phone</h1>
                    <p>+91 9500254201</p>
                </div>
                <div className="line-1">
                    <h1>Email</h1>
                    <p>k.dharshini800@gmail.com</p>
                </div>
                <div className="line-1">
                    <h1>Website</h1>
                    <p>www.dharshini_k.com</p>
                </div>
                <div className="socials">
                    <img src="/images/insta.png" width="50px" alt="instagram-logo" />
                    <img src="/images/whatsapp.png" width="50px" alt="whatsapp-logo" />
                    <img src="/images/x.png" width="45px" alt="x-logo" />
                    <img src="/images/pin.png" width="45px" alt="pinterest-logo" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default App
