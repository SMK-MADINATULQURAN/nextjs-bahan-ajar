interface ButtonProps {
    title: string;
    isDisabled?: boolean;

  }
  
  const Button: React.FC<ButtonProps> = ({ title, isDisabled = false }) => {
    return (
      <button
        disabled={isDisabled}
        className="w-16 h-8 rounded border bg-red-400"
      >
        {title}
      </button>
    );
  };
  
  export default Button;
  