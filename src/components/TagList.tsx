import { Tag } from "./Tag";

interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex gap-2 mt-1">
      {tags.map((tag) => (
        <Tag value={tag} />
      ))}
    </div>
  );
};
