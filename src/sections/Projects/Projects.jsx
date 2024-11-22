import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
      <section id="projects" className={styles.container}>
          <h1 className="sectionTitle">Projects</h1>
          <div className={styles.projectsContainer}>
              <ProjectCard
                  src={viberr} // this is our only object which is a reference to a png
                  link="https://github.com/mckorn/notion-sheets-sync"
                  h3="Viberr"
                  p="Streaming App"
              />
               <ProjectCard
                  src={freshBurger}
                  link="https://github.com/mckorn/notion-sheets-sync"
                  h3="Fresh Burger"
                  p="Hamburger Restaurant"
              />
              <ProjectCard
                  src={hipsster}
                  link="https://github.com/mckorn/notion-sheets-sync"
                  h3="Hipsster"
                  p="Glasses Shop"
              />
                <ProjectCard
                  src={fitLift}
                  link="https://github.com/mckorn/notion-sheets-sync"
                  h3="FitLift"
                  p="Fitness App"
              />
          </div>
      </section>
  )
}

export default Projects