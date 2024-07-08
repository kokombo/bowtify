import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

const MyIcon = (props: Props) => {
  return <props.icon className="h-[22px] w-[22px]" />;
};

export default MyIcon;
