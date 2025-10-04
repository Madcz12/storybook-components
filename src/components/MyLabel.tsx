import './MyLabel.css';


export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  AllCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * font color
   */
  fontColor?: string;
  /**
   * background color
   */
  backgroundColor?: string;
}

/** 
* allCaps: boolean,
* color: 'text-primary | 'text-secondary' | 'text-tertiary',
* fontColor: string, texto del span
*/

export const MyLabel = ({
  label,
  size = 'h3',
  AllCaps = false,
  color = 'text-tertiary',
  fontColor = '#ddd',
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {!AllCaps ? label.toUpperCase() : label}
    </span>
  );
}
