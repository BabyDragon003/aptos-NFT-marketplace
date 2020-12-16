type TooltipSectionProps = { text: string };
export function TooltipSection({ text }: TooltipSectionProps) {
  return (
    <div className="tooltip" data-tip={text}>
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "flex",
          wordBreak: "break-word",
