import React, { SVGProps } from "react";

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size?: string;
  color?: string;
  onHover?: boolean;
}

export default HomeIconProps;
