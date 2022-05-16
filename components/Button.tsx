export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, className, type, disabled } = props;
  return (
    <button
      type={type}
      className={`${className} border-2 p-1 rounded-md hover:bg-gray-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
