import Button from "./Button";

interface PostProps {
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
}

export default function Post({ id, title, content, authorName }: PostProps) {
  return (
    <div
      style={{ border: "1px solid black", padding: "15px", margin: "10px 0" }}
    >
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <Button postId={id} />
    </div>
  );
}
