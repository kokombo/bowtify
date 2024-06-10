type Props = {
  title: string;
};

const LessonTitle = (props: Props) => {
  return (
    <h5 className="text-base font-semibold">
      {props.title.length > 20 ? `${props.title.slice(0, 20)}...` : props.title}
    </h5>
  );
};

export default LessonTitle;
