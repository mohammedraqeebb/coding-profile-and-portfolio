import React, { FC } from 'react';
import Stat, { Statprops } from '../stat/stat.component';
import styles from './Stats.module.scss';

type StatsProps = {
  stats: Statprops[];
};

const Stats: FC<StatsProps> = ({ stats }) => {
  return (
    <div className={styles.stats_section}>
      <p className={styles.stats_title}>Stats</p>
      <div className={styles.stats_container}>
        {stats.map((currentStat) => (
          <Stat key={currentStat.heading} {...currentStat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
