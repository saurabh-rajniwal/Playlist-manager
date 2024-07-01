import "../buttons/Button.css";

function Button({ title }) {
  return (
    <>
      <button className="buttonWrapper">{title}</button>
    </>
  );
}

export default Button;
