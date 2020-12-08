type TooltipSectionProps = { text: string };
export function TooltipSection({ text }: TooltipSectionProps) {
  return (
    <div className="tooltip" data-tip={text}>
      <p
          maxHeight: "3.6em",
          lineHeight: "1.8em",
        }}
      >
        {text}
      </p>
    </div>
  );
}
