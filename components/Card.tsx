export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return <div className={`card shadow-lg ${className}`}>{children}</div>;
};

export const CardHeader = (props: CardProps) => {
  const { children, className } = props;
  return <div className={`${className} text-center w-full`}>{children}</div>;
};

export const CardBody = (props: CardProps) => {
  const { children, className } = props;
  return <div className={`${className} mt-2 px-4`}>{children}</div>;
};

export const CardFooter = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div className={`${className} mt-4 flex justify-start px-4 gap-x-3`}>
      {children}
    </div>
  );
};
