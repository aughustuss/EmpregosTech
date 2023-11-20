import React from "react";

interface ClientCardProps {
  text: string;
  icon: string | React.ReactNode;
}
const ClientCard = ({ text, icon }: ClientCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 justify-center items-center p-2 text-center">
        <p className="text-3xl text-primary">{icon}</p>
        <p className="text-bodycolor">{text}</p>
      </div>
    </>
  );
};

export default ClientCard;
