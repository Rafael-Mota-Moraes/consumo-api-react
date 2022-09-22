import styles from "./Input.module.css";

export default function Input({ type, label, onChange, valor }) {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      {type == "text" ? (
        <input
          type={type}
          onChange={(e) => onChange(e.target.value)}
          value={valor}
        />
      ) : (
        <textarea
          onChange={(e) => onChange(e.target.value)}
          value={valor}
        ></textarea>
      )}
    </div>
  );
}
