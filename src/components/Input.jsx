import styles from "./Input.module.css";

export default function Input({ type, label, onChange }) {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      {type == "text" ? (
        <input type={type} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <textarea onChange={(e) => onChange(e.target.value)}></textarea>
      )}
    </div>
  );
}
