const Hero = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md mb-2 sm:mb-3">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white opacity-90 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
