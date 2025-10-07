import CuraLogo from '../assets/logosvg 1.svg';
function Header() {
  return (
    <header className="bg-white flex w-10/12 mx-auto rounded-4xl mt-5 px-8 p-5 justify-between items-center font-bold shadow-sm">
        <div className='flex gap-4 items-center'>
        <img src={CuraLogo} alt="" width={50}/>
        <h1 className="font-rubik text-2xl text-[#0D1B2A]">CuraAI</h1>
        </div>
        <a className="font-rubik bg-[#61A5C2] text-white  p-3 rounded" href="/filesUpload">Request a demo</a>
    </header>
  );
}

export default Header;