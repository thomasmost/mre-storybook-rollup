import styles from "./page.module.css";
import { MyComponent } from "@myscope/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.demo}>
        <div className={styles.intro}>
          <h1>Home</h1>
          <p>Welcome to the MRE!</p>
        </div>
        <div className={styles.wrap}>
          {/* This works! */}
          <MyComponent />
        </div>
      </div>
    </main>
  );
}
