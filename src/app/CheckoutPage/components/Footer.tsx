export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-center items-center text-xs cursor-pointer font-light mt-8">
        <div className="flex flex-row">
          <p>Powered by</p>
          <a href="#" className="font-bold mx-2 block md:inline-block">
            hixcoder
          </a>
        </div>
        <div className="flex flex-row my-2">
          <a href="#" className="hover:underline">
            <span className="hidden md:inline-block">|</span> Terms
          </a>
          <a href="#" className="mx-2 hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
