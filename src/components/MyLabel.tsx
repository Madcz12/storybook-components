import './MyLabel.css';


interface Props {
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
}

/** 
* allCaps: boolean,
* color: 'text-primary | 'text-secondary' | 'text-tertiary',
* fontColor: string, texto del span
*/

export const MyLabel = ({label, size = 'h3', AllCaps = false, color='text-tertiary', fontColor='#ddd'}: Props) => {
  return (
    <span className={`${size} ${color}`}
    style={{color: fontColor}}>{!AllCaps ? label.toUpperCase() : label}</span>
  )
}
