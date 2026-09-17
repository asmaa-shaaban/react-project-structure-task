type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};

export const Card = ({ title, description, image, children }: CardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        margin: "10px",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "4px" }}
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};
