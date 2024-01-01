export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row text-sm cursor-pointer font-light">
        <p>Powered by</p>
        <a href="#" className="font-bold mx-2">
          hixcoder
        </a>
        <a href="#" className="hover:underline">
          | Terms
        </a>
        <a href="#" className="mx-2 hover:underline">
          Privacy
        </a>
      </div>
    </footer>
  );
}
