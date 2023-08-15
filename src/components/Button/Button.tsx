import React from "react";

type Props = {
  action: () => void;
  text: string;
};

export const Button: React.FC<Props> = ({ action, text }) => {
  return (
    <button
      onClick={action}
      className="button is-link"
    >
      {text}
    </button>
  );
};
