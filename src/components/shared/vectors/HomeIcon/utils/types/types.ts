import { SVGProps } from "react";

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size?: string;
  color?: string;
  onClick?: () => void;
  onHover?: boolean;
}

export default HomeIconProps;