import { useCopyToClipboard } from "../hooks/useCopy";

interface ItemProps {
  value: string;
}

const AddButton = ({ value }: ItemProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <button className="link" onClick={() => copyToClipboard(value)}>
      {hasCopiedText ? "Copied!" : "Copy"}
    </button>
  );
};
export default AddButton;
