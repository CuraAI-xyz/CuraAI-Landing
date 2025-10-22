import HomeForm from "./HomeForm";
import HomeText from "./HomeText";

function Home() {
  return (
    <div className="flex flex-col w-full items-center px-4 justify-center py-16 lg:py-24">
    <HomeText/>
    <a href="https://calendly.com/mauroradino22/30min" target="_blank" className="bg-[#61A5C2] hover:bg-[#4A8BA8] font-rubik text-white py-3 px-8 mt-8 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg hover:shadow-xl">
      Request a Demo
    </a>
    </div>
  );
}

export default Home;