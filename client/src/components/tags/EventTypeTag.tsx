type Props = {
  label: string;
};

const EventTypeTag = (props: Props) => {
  return (
    <span className="w-fit py-[1px] px-1 text-xs bg-green-600 text-white font-light lowercase">
      {props.label}
    </span>
  );
};

export default EventTypeTag;
