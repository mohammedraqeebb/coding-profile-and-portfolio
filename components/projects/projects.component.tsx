import React, { FC } from 'react';
import { ProjectProps } from '../project-select/project-select.component';
import Project from '../project/project.component';
import styles from './Projects.module.scss';

type ProjectsProps = {
  projects: ProjectProps[];
};
const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.projects_section}>
      <div className={styles.section_header}>
        <span className={styles.section_title}>Projects</span>
        <span className={styles.section_right_heading}>Create new Project</span>
      </div>
      <div className={styles.projects_container}>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
