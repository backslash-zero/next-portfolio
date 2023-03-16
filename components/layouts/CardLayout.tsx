import dynamic from "next/dynamic";

interface CardLayoutProps extends React.PropsWithChildren {
  first: boolean;
}

const CardLayout = ({ first, children }: any) => {
  return (
    <div
      className={`pt-4 pb-4
								${!first ? "border-t" : "border-none"} 
								border-stone-800/20 border-t
                text-sm
								flex flex-col gap-2
								`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
