"use client";

const Hero = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    contentSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/apartment.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-16 left-16 z-10 text-left text-white p-16">
        <h2 className="text-5xl font-bold mb-4">Apartament u Moniki</h2>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center mb-4 z-10">
        <button
          onClick={scrollToContent}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 animate-bounce cursor-pointer"
        >
          Zejdź niżej
        </button>
      </div>
    </section>
  );
};

export { Hero };
