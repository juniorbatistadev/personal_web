import styles from "./Job.module.css";

export default function Job({ position, place, dates, description }) {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.position}> {position} </span>
        <a href={place.website} target="_blank" rel="noreferrer">
          <span className={styles.place}>
            @ <span className={styles.placeText}>{place.name} </span>
          </span>
        </a>
      </p>
      <p className={styles.dates}>{dates}</p>
      <p className={styles.list}>{description}</p>
    </div>
  );
}
