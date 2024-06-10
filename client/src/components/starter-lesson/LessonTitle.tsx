import { sliceString } from "@/utilities";

type Props = {
  title: string;
};

const LessonTitle = (props: Props) => {
  return (
    <h5 className="text-base font-semibold">{sliceString(props.title, 20)}</h5>
  );
};

export default LessonTitle;
