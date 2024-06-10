const Copyright = () => {
  const date = new Date().getFullYear();

  return (
    <p className="text-white text-xs font-medium">&copy; {date} Bowtify, LLC</p>
  );
};

export default Copyright;
