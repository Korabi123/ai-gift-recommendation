interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
 
export default Heading;