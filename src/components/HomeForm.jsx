function HomeForm() {
  return (
    <form>
        <input type="email" placeholder="Your Email" className="shadow-md border-1 rounded-lg border-neutral-400 p-2 m-2"/>
        <button type="submit" className="bg-[#61A5C2] text-white py-2 px-4 m-2 rounded">Submit</button>
    </form>
  );
}
export default HomeForm;