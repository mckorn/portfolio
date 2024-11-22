import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/design-face.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of McKenna Corn"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Day mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          McKenna
          <br />
          Corn
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a frontend developer based in Charlotte, NC specializing in
          building (and occasionally designing) exceptional, high-quality
          websites and applications. With a passion for developing modern React
          web applications for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
