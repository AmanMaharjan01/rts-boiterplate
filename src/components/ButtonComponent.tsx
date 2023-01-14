export interface IButton {
  label: string;
  bgColor?: string;
  color?: string;
  handleClick?: () => void;
}

export default function ExampleComponent({ label, bgColor, color, handleClick }: IButton) {
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: bgColor,
          padding: '10px 20px',
          border: 'unset',
          color: color,
        }}
      >
        {label ?? 'Say hi to AMan'}
      </button>
    </div>
  );
}
