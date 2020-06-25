import React from 'react';

function Main() {
    return (
        <div>
            <main>
                <section class="home">

                    <h1 class="home__name">
                        Christopher <span className="home__name--last">Matthews</span>
                    </h1>
                    
                    <h2>
                        Web Developer & Graphic Designer
                    </h2>

                    <div className="social-icons">
                        <i onClick={() => window.open("https://www.linkedin.com/in/christopher-matthews-62833152/", "_blank")} className="fa fa-linkedin fa-2x" ></i >
                        <i onClick={() => window.open("https://christopher-matthews.herokuapp.com/", "_blank")} className="fa fa-github fa-2x" ></i >
                        <a href="src/public/Assets/Images/ChristopherMatthews_Web-Dev_Resume.pdf" target="_blank" rel="noopener noreferrer" class="fa fa-file fa-2x"></a>
                    </div>

                    <footer>&copy; 2020 Christopher H Matthews</footer>
                </section>
            </main>
        </div>
    );
}

export default Main;