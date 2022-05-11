interface Props {
  className?: string;
  type?: string;
  onClick: any;
}
export const Button: React.FC<Props> = ({
  onClick,
  children,
  className,
  type,
}) => {
  const buttonType: string =
    type == "secondary"
      ? "bg-gray-300 hover:bg-blue-500"
      : type == "error"
      ? "bg-red-400 hover:bg-red-500"
      : "bg-blue-400 hover:bg-blue-500";
  const buttonClass = "flex items-center w-full p-2 rounded text-white";
  return (
    <button
      className={`
        ${buttonType} 
        ${buttonClass}
        ${className ? " " + className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
