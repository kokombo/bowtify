import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

const MyIcon = (props: Props) => {
  return <props.icon className="h-5 w-5" />;
};

export default MyIcon;
