export const Button = ({ action, children }) => {
  return (
    <button
      onClick={action}
      className="button is-primary"
    >
      {children}
    </button>
  );
};
