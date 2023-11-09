interface TagProps {
  value: string;
}

export const Tag = ({ value }: TagProps) => {
  return <p className="px-2 py-1 text-sm rounded-md shadow-sm bg-neutral-600/40">{value}</p>;
};
