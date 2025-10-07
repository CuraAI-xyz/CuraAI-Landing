import HomeForm from "./HomeForm";
import HomeText from "./HomeText";

function Home() {
  return (
    <div className="flex flex-col w-full items-center px-4 justify-center min-h-screen">
    <HomeText/>
    <a href="https://calendly.com/mauroradino22/30min" target="_blank" className="bg-[#61A5C2] font-rubik text-white py-2 px-4 m-2 rounded-lg font-semibold">Set a meeting</a>
    </div>
  );
}

export default Home;