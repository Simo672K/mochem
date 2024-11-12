import { cn } from "@/lib/utils";

interface Props {
  active?: boolean;
}
const SidebarAvatar = ({ active }: Props) => {
  return (
    <li
      className={cn(
        "p-0.5 border-2 border-transparent rounded-lg cursor-default",
        active && "border-sky-300"
      )}
    >
      <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-xl rounded-md">
        HH
      </div>
    </li>
  );
};
export default SidebarAvatar;
