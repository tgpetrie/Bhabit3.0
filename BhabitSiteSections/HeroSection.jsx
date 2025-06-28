import bunny from "../src/assets/bhabit-bunny.png";
import wordmark from "../src/assets/bhabit-wordmark.png";

export function HeroSection() {
  return (
    <section className="bg-transparent text-center py-20 px-4 mt-16 flex flex-col items-center">
      <img src={bunny} alt="BHABIT Bunny" className="w-32 h-32 mb-4" />
      <img src={wordmark} alt="BHABIT Wordmark" className="w-64 mb-2" />
      <h1 className="text-4xl sm:text-6xl font-prosto font-bold text-primary drop-shadow-lg">
        BHABIT (BBIT)
      </h1>
      <p className="text-xl sm:text-2xl mt-4 text-purple font-prosto">
        Profits Buy Impulse
      </p>
      <a
        href="#whitepaper"
        className="inline-block mt-6 px-6 py-3 bg-purple hover:bg-purple-700 text-white font-semibold rounded shadow"
      >
        Read the Whitepaper
      </a>
    </section>
  );
}
