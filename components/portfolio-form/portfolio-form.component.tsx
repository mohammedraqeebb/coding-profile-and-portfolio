import { playgroundData, projectsData } from '@/data';
import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { FC } from 'react';
import Button from '../button/button.component';
import PlaygroundOptionSelect from '../playground-option-select/playground-option-select.component';
import ProjectSelect from '../project-select/project-select.component';
import styles from './PortfolioForm.module.scss';

type PortfolioFormProps = {
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  portfolio: typeof DEFAULT_USER_FIELDS.portfolio;
  handleSubmit: () => void;
};

const PortfolioForm: FC<PortfolioFormProps> = ({
  user,
  setUser,
  portfolio,
  handleSubmit,
}) => {
  const isPlaygroundInPortfolio = (id: string) => {
    return portfolio.playgrounds.find(
      (currentPlayground) => currentPlayground.id === id
    )
      ? true
      : false;
  };
  const isProjectInPortfolio = (id: string) => {
    return portfolio.projects.find((currentProject) => currentProject.id === id)
      ? true
      : false;
  };
  return (
    <div className={styles.portfolio_form_container}>
      <div className={styles.playgrounds_section}>
        <div className={styles.section_header}>
          <span className={styles.section_title}>Playgrounds</span>
          <span className={styles.section_right_heading}>See all</span>
        </div>
        <div className={styles.playground_data}>
          {playgroundData.map((playground) => (
            <PlaygroundOptionSelect
              key={playground.id}
              {...playground}
              isPlaygroundInPortfolio={isPlaygroundInPortfolio(playground.id)}
              user={user}
              setUser={setUser}
            />
          ))}
        </div>
      </div>
      <div className={styles.projects_section}>
        <div className={styles.section_header}>
          <span className={styles.section_title}>Projects</span>
          <span className={styles.section_right_heading}>See all</span>
        </div>
        <div className={styles.projects_container}>
          {projectsData.map((project) => (
            <ProjectSelect
              key={project.id}
              {...project}
              user={user}
              setUser={setUser}
              isProjectInPortfolio={isProjectInPortfolio(project.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.submit_buttons}>
        <Button
          name="cancel"
          variant="secondary"
          size="base"
          onClick={() => handleSubmit()}
        />
        <Button
          name="save changes"
          variant="primary"
          size="base"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default PortfolioForm;
