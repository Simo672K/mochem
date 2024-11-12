interface Props {
  children?: React.ReactNode;
}

const SidebarLinks = ({ children }: Props) => {
  return (
    <div className="mt-8">
      <ul className="px-6 gap-3 flex flex-col">{children}</ul>
    </div>
  );
};
export default SidebarLinks;
