import React from "react";
import styles from "./ListCard.module.css";

export const ListCard = ({ title, listItems }) => {
  return (
    <div className={styles.listContainer}>
      {title}
      <div>
        {listItems.map(listItem => {
          return (
            <div className={styles.list} key={listItem}>
              + {listItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};
