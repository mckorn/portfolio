import React from "react";
import styles from "./ProjectsStyles.module.css";
import syncSheet from "../../assets/sync-sheet-logo.png";
import driverOwl from "../../assets/driver-owl.png";
import coffeeMaker from "../../assets/coffee-maker-logo.png";
import myToDo from "../../assets/todo-list-logo.png";
import adieuAds from "../../assets/aa-logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={syncSheet} // this is our only object which is a reference to a png
          link="https://github.com/mckorn/notion-sheets-sync"
          h3="Sync Sheet"
          p="Notion to Sheets Syncing Tool"
        />
        <ProjectCard
          src={driverOwl}
          link="https://play.google.com/store/apps/details?id=com.voteowl.driver&hl=en_US&pli=1"
          h3="Driver Owl"
          p="Driving App for Vote Owl"
        />
        <ProjectCard
          src={adieuAds}
          link="https://github.com/mckorn/adieuads"
          h3="AdieuAds"
          p="Peronalized Ad Blocker"
        />
        <ProjectCard
          src={coffeeMaker}
          link="https://github.com/mckorn/webpages"
          h3="Coffee Maker"
          p="Ordering and Managing Coffee Shop"
        />
        <ProjectCard
          src={myToDo}
          link="https://github.com/mckorn/my-todo"
          h3="My To-Do"
          p="Virtual To-Do List"
        />
        <ProjectCard
          src={myToDo}
          link="https://github.com/mckorn/quotegen"
          h3="QuoteGen"
          p="Daily Quote Generator"
        />
        <ProjectCard
          src={myToDo}
          link="https://github.com/mckorn/my-todo"
          h3="Atmosfit"
          p="Weather App for your Wardrobe"
        />
      </div>
    </section>
  );
}

export default Projects;
