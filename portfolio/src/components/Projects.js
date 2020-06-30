import React from 'react';
function About() {
    return (
        <div>
            <main>
        <section class="projects">
            <div class="projects__bio-image">
                <div class="projects__header">
                    <h1>My Projects</h1>
                </div>
            </div>


            <div class="projects__items">
                <div class="projects__item">
                    <img src="../public/Assets/Images/Our-Circle-Main.png" alt="My Project" target="_blank">
                    <div class="projects__btns">
                        <a href="http://our-circle.herokuapp.com/" class="projects__btn" target="_blank">
                            <i class="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/zidandesirae/Project3" class="projects__btn" target="_blank">
                            <i class="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div class="projects__item">
                    <img src="../public/Assets/Images/pokemood-screenshot.png" alt="My Project" target="_blank">
                    <div class="projects__btns">
                        <a href="https://murmuring-mountain-45065.herokuapp.com/" class="projects__btn" target="_blank">
                            <i class="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/MelanieRogoff/PokeMood" class="projects__btn" target="_blank">
                            <i class="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div class="projects__item">
                    <img src="../public/Assets/Images/Trail-Finder_Screenshot.png" alt="My Project" target="_blank">
                    <div class="projects__btns">
                        <a href="https://howbzr.github.io/Astro-Project/" class="projects__btn" target="_blank">
                            <i class="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/HOWBZR/Astro-Project" class="projects__btn" target="_blank">
                            <i class="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div class="projects__item">
                    <img src="../public/Assets/Images/Password-Generator_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div class="projects__btns">
                        <a href="https://sirhunty.github.io/03-JavaScript-RPG/" class="projects__btn" target="_blank">
                            <i class=" fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/03-JavaScript-RPG" class="projects__btn" target="_blank">
                            <i class=" fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div class="projects__item">
                    <img src="../public/Assets/Images/Work-Day-Scheduler_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div class="projects__btns">
                        <a href="https://sirhunty.github.io/05-Third-Party-APIs/" class="projects__btn target"
                            target="_blank">
                            <i class="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/05-Third-Party-APIs" class="projects__btn" target="_blank">
                            <i class="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
                <div class="projects__item">
                    <img src="../public/Assets/Images/Weather-Dashboard-App_Screenshot.png" alt="My Project"
                        target="_blank">
                    <div class="projects__btns">
                        <a href="https://sirhunty.github.io/06-Server-Side-APIs/" class="projects__btn" target="_blank">
                            <i class="fa fa-eye"></i> Preview
                        </a>
                        <a href="https://github.com/sirhunty/06-Server-Side-APIs" class="projects__btn" target="_blank">
                            <i class="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
            </div>


            <div class="social-icons">
                <a href="https://www.linkedin.com/in/christopher-h-matthews/" target="_blank">
                    <i class="fa fa-linkedin fa-2x"></i>
                </a>
                <!-- <a href="https://www.facebook.com/sirhuntydesigns/" target="_blank">
                    <i class="fa fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/sirhunty_designs/" target="_blank">
                    <i class="fa fa-instagram fa-2x"></i> -->
                </a>
                <a href="https://christopher-matthews.herokuapp.com/" target="_blank">
                    <i class="fa fa-github fa-2x"></i>
                </a>
                <a href="/src/public/Assets/Images/ChristopherMatthews_Web-Dev_Resume.pdf" target="_blank"
                    class="fa fa-file fa-2x"></a>
            </div>

            <footer>&copy; 2020 Christopher H Matthews</footer>
        </section>
    </main>

    <script src="/src/public/css/dist/js/alert.js"></script>
    <script src="../public/css/dist/js/main.js"></script>
</div>
    );
}
export default About;