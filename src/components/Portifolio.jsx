import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Menu = (props) => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              Contact Me
            </a>
          </li>
        </ul>
        {/* <SocialLinks /> */}
      </div>
    </div>
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            <strong>Louis</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I do</span>
          <span className="line">Front End</span>
          <span className="line">
            <span className="color">&</span> Back End.
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my work</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Louis.</h4>
            <p>I am a Full Stack Web Developer, based in Bialystok, Poland</p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. Fuelled by my unbridled passion for innovation
              and technology, I pour my heart and soul into building web
              experiences that leave lasting impressions. I can't stop learning
              new things; the more, the better. I also love playing chess and a
              bit of FIFA with friends and family. Oh, and rice with chicken is
              my favorite meal.
            </p>
          </div>
          {/* <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and VueJS.
              I also make the web pretty by using Sass, CSS and, whenever
              needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc). But, of course, whenever the project requires PHP,
              I do PHP as well (Wordpress, Laravel, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a designer.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop,
              Illustrator, InDesign, Lightroom or Xd are some kind of industry
              standards and I love working with them. I'm not limited to them,
              though: Gimp, Inkscape or Figma are also very valid applications
              that I've been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I
              mentioned, creating pretty things is particularly important for
              me.
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
};

/***********************
  Project Component
 ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.img}
          alt={"Screenshot of " + props.title}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(" ").map((t) => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{" "}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on
            lately. All of these were built during my coding camp adventure on{" "}
            <a
              href="https://epicode.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EPICODE
            </a>
            , where I've been coding for almost 6 months non-stop until I
            completed all the projects required to get my Full-Stack Developer
            certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Choropleth Map."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg"
            }
            tech="js d3 css"
            link="https://codepen.io/louisestevez/full/NBeaWK/"
            repo="https://github.com/louisestevez/fcc-choropleth-map"
          >
            <small>Built using CSS, JS and D3.js.</small>
            <p>
              A choropleth map representing the educational attainment by county
              in the U.S.
            </p>
          </Project>
          <Project
            title="Random Quoting Machine."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg"
            }
            tech="js vue css"
            link="https://codepen.io/louisestevez/full/bxgEyd/"
            repo="https://github.com/louisestevez/random-quoting-machine"
          >
            <small>Built using VueJS, Axios and CSS + Bootstrap.</small>
            <p>
              A random quoting app which retrieves pictures and quotes from two
              different APIs.
            </p>
          </Project>
          <Project
            title="Calculator."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg"
            }
            tech="js react css"
            link="https://codepen.io/louisestevez/full/ERVONM/"
            repo="https://github.com/louisestevez/the-calcoolator"
          >
            <small>Built using React and CSS.</small>
            <p>
              A project on which I built a virtual calculator with its usual
              features.
            </p>
          </Project>
          <Project
            title="Pomodoro Timer."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg"
            }
            tech="js react css"
            link="https://codepen.io/louisestevez/full/dqJGVa"
            repo="https://github.com/louisestevez/tomate-time"
          >
            <small>Built using React, CSS and lots of SVG.</small>
            <p>
              A cute and animated Pomodoro clock to help the users improve their
              productivity.
            </p>
          </Project>
          <Project
            title="TicTacToe Game."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg"
            }
            tech="js react css"
            link="https://codepen.io/louisestevez/full/KRevzB/"
            repo="https://github.com/louisestevez/TicTacToe"
          >
            <small>Built using React, CSS and SVG.</small>
            <p>
              A TicTacToe game with a basic AI algorithm made for the legacy
              front-end projects on FreeCodeCamp.
            </p>
          </Project>
          <Project
            title="Twitch Clone."
            img={
              "https://raw.githubusercontent.com/louisestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg"
            }
            tech="js vue sass"
            link="https://codepen.io/louisestevez/full/xjwVPq/"
          >
            {/* repo="https://github.com/louisestevez/TicTacToe"> */}
            <small>Built using VueJS, Axios and Scss.</small>
            <p>
              Simple Twitch clone using the new Twitch Helix API and made for
              the legacy front-end projects on FreeCodeCamp.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">Contact me?</p>
            <p className="separator" />
          </div>
        </div>
      </div>
      <form id="contact-form" action="#">
        <input placeholder="Name" name="name" type="text" required />
        <input placeholder="Email" name="email" type="email" required />
        <textarea placeholder="Message" type="text" name="message" />
        <input className="button" id="submit" value="Submit" type="submit" />
      </form>
      <div>
        <SocialLinks />
      </div>
    </section>
  );
};

/***********************
  Footer Component
 ***********************/

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return (
    <div className="social">
      <ul>
        <li>
          <a target="_blank" class="facebook" href="#s">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="twitter" href="#sf">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="instagram" href="#fsf">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="google" href="#ff">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

/***********************
  Main Component
 ***********************/

class Portifolio extends React.Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive",
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}
export default Portifolio;
