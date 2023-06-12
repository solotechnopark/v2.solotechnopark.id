import React from "react";
import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={styles.banterLoader}>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
      <div className={styles.banterLoaderBox}></div>
    </div>
  );
}

export default Loading;
