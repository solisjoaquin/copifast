import { useCopyToClipboard } from "../hooks/useCopy";

interface ItemProps {
  value: string;
}

const Item = ({ value }: ItemProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <button className="link" onClick={() => copyToClipboard(value)}>
      {hasCopiedText ? "Copied!" : "Copy"}
    </button>
  );
};
export default Item;
