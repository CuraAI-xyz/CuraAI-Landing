import CuraLogo from '../assets/logosvg 1.svg';
function Header() {
  return (
    <header className="bg-white flex w-11/12 lg:w-10/12 mx-auto rounded-2xl lg:rounded-4xl mt-3 lg:mt-5 px-4 lg:px-8 py-3 lg:py-5 justify-between items-center font-bold shadow-sm">
        <div className='flex gap-2 lg:gap-4 items-center'>
        <img src={CuraLogo} alt="CuraAI Logo" width={40} className="lg:w-[50px]"/>
        <h1 className="font-rubik text-xl lg:text-2xl text-[#0D1B2A]">CuraAI</h1>
        </div>
        <a className="font-rubik bg-[#61A5C2] text-white px-3 py-2 lg:px-4 lg:py-3 rounded text-sm lg:text-base hover:bg-[#4A8BA8] transition-colors" href="/filesUpload">
          <span className="hidden sm:inline">Request a demo</span>
          <span className="sm:hidden">Demo</span>
        </a>
    </header>
  );
}

export default Header;