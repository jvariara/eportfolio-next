interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h6 className="text-primary font-semibold text-3xl sm:text-4xl items-center">
        {title}
      </h6>
      <h1 className="text-3xl md:text-4xl lg:text-5xl my-4 font-bold text-center text-white">
        {subtitle}
      </h1>
    </div>
  );
};

export default SectionHeading;
