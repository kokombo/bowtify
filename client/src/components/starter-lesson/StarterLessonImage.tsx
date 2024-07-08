type Props = {
  url: string;
};

const StarterLessonImage = (props: Props) => {
  return (
    <iframe
      width="150"
      height="100%"
      src={props.url}
      allow="picture-in-picture"
      className="bg-gray"
      title="lesson-iframe"
    />
  );
};

export default StarterLessonImage;
