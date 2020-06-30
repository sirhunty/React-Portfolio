import React from 'react';

function About() {
    return (
        <div>
            <main>
        <section className="projects">
            <div className="projects__bio-image">
                <div className="projects__header">
                    <h1>My Projects</h1>
                </div>
            </div>


            <div className="projects__items">
                <div className="projects__item">
                    <img src="../public/Assets/Images/Our-Circle-Main.png" alt="My Project" target="_blank">
                    <div className="projects__btns">
                        <a href="http://our-circle.herokuapp.com/" className="projects__btn" target="_blank">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/zidandesirae/Project3" className="projects__btn" target="_blank">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div className="projects__item">
                    <img src="../public/Assets/Images/pokemood-screenshot.png" alt="My Project" target="_blank">
                    <div className="projects__btns">
                        <a href="https://murmuring-mountain-45065.herokuapp.com/" className="projects__btn" target="_blank">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/MelanieRogoff/PokeMood" className="projects__btn" target="_blank">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div className="projects__item">
                    <img src="../public/Assets/Images/Trail-Finder_Screenshot.png" alt="My Project" target="_blank">
                    <div className="projects__btns">
                        <a href="https://howbzr.github.io/Astro-Project/" className="projects__btn" target="_blank">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/HOWBZR/Astro-Project" className="projects__btn" target="_blank">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div className="projects__item">
                    <img src="../public/Assets/Images/Password-Generator_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div className="projects__btns">
                        <a href="https://sirhunty.github.io/03-JavaScript-RPG/" className="projects__btn" target="_blank">
                            <i className=" fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/03-JavaScript-RPG" className="projects__btn" target="_blank">
                            <i className=" fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div className="projects__item">
                    <img src="../public/Assets/Images/Work-Day-Scheduler_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div className="projects__btns">
                        <a href="https://sirhunty.github.io/05-Third-Party-APIs/" className="projects__btn target"
                            target="_blank">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/05-Third-Party-APIs" class="projects__btn" target="_blank">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div className="projects__item">
                    <img src="../public/Assets/Images/Weather-Dashboard-App_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div className="projects__btns">
                        <a href="https://sirhunty.github.io/06-Server-Side-APIs/" className="projects__btn" target="_blank">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/06-Server-Side-APIs" className="projects__btn" target="_blank">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </div>


            <div className="social-icons">
                        <i onClick={() => window.open("https://www.linkedin.com/in/christopher-matthews-62833152/", "_blank")} className="fa fa-linkedin fa-2x" ></i >
                        <i onClick={() => window.open("https://christopher-matthews.herokuapp.com/", "_blank")} className="fa fa-github fa-2x" ></i >
                        <a href="src/public/Assets/Images/ChristopherMatthews_Web-Dev_Resume.pdf" target="_blank" rel="noopener noreferrer" class="fa fa-file fa-2x"></a>
                    </div>

            <footer>&copy; 2020 Christopher H Matthews</footer>
        </section>
    </main>

    <script src="/src/public/css/dist/js/alert.js"></script>
    <script src="../public/css/dist/js/main.js"></script>
</div>
    );
}
export default Projects;