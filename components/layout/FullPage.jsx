import styles from "./FullPage.module.scss";

const FullPage = ({ children }) => {
  return <div className={styles.fullpageLayout}>{children}</div>;
};

export default FullPage;
