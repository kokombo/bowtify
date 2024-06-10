type Props = {
  title: string;
};

const SuggestedEventTitle = (props: Props) => {
  return (
    <h5 className="text-base font-semibold text-wrap leading-tight">
      {props.title.length > 50 ? `${props.title.slice(0, 50)}...` : props.title}
    </h5>
  );
};

export default SuggestedEventTitle;
