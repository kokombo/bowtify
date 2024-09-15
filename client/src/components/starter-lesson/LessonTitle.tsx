type Props = {
  title: string;
};

const LessonTitle = (props: Props) => {
  return (
    <h5 className="text-base font-semibold">
      <span className="block text-ellipsis overflow-hidden sm:line-clamp-2 md:line-clamp-1">
        {props.title}
      </span>
    </h5>
  );
};

export default LessonTitle;
