import styles from "./images.module.css";
function Image({ src, className }: any) {
  return (
    <img
      className={`${styles.image} ${className}`}
      src={src}
    />
  );
}

export default Image;
