import styles from "./LeaderboardPage.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { achievementsIcons } from "../../lib";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getLeaders().then(leadersList => {
      setLeaders(leadersList.leaders);
    });
  }, []);
  const navigate = useNavigate();
  const startTheGame = e => {
    e.preventDefault();
    navigate(`/`);
  };

  let i = 1;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Лидерборд</h1>
        <Button onClick={startTheGame}>Начать игру</Button>
      </div>
      <ul className={styles.leaderboard}>
        <div className={styles.leadersItemTitle}>
          <div>Позиция</div>
          <div>Пользователь</div>
          <div>Достижения</div>
          <div>Время</div>
        </div>
        {leaders
          .sort((a, b) => +a.time - +b.time)
          .map(leader => {
            return (
              <li className={styles.leadersItem} key={leader.id}>
                <div># {i++}</div>
                <div>{leader.name}</div>
                <div className={styles.achievementsIcons}>
                  <div>
                    {leader.achievements.includes(1) ? achievementsIcons.hardModeActive : achievementsIcons.hardMode}
                  </div>
                  <div>
                    {leader.achievements.includes(2)
                      ? achievementsIcons.withoutSuperPowersActive
                      : achievementsIcons.withoutSuperPowers}
                  </div>
                </div>
                <div>
                  {Math.trunc(leader.time / 60)
                    .toString()
                    .padStart("2", "0")}
                  :{(leader.time % 60).toString().padStart("2", "0")}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
