import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currrentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLeve = Math.round((currrentExperience * 100)) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLeve}%` }} />

                <span className={styles.currentExperience} style={{ left: `${percentToNextLeve}%` }}>
                    {currrentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}