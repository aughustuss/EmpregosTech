interface TagCardProps {
  text: string;
}

const TagCard = ({ text }: TagCardProps) => {
  return (
    <div className="border rounded-md bg-gray-200 h-[32px] flex  items-center">
      <h3 className="p-2">{text}</h3>
    </div>
  );
};

export default TagCard;
