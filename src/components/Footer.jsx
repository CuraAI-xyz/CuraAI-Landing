function Footer () {
    return (
      <footer className="border-t-1 mx-6 border-gray-300 text-white p-6 text-center flex items-center justify-between">
        <img width={50} src="/logoCura.svg" alt="Logo CuraAI"/>
        <p className="font-rubik text-[#0D1B2A] font-semibold">&copy; 2025 CuraAI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://x.com/CuraAI_" target="_blank"><img className="h-6" src="/x_logo.png" alt="" /></a>
          <a href="https://www.linkedin.com/company/curaai-xyz" target="_blank"><img className="h-6" src="/linkedin_logo.png" alt="" /></a>
        </div>
      </footer>
    );
  }

export default Footer;