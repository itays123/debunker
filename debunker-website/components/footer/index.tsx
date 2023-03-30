import Feed from "../icons/Feed";
import LightBulb from "../icons/LightBulb";
import Search from "../icons/Search";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer>
      <nav className="grid grid-cols-3 items-center w-full h-14 fixed bottom-0 inset-x-0 z-10 border-gray-200 bg-slate-50 border-t-[1px]">
        <NavLink to="/feed" label="פיד ניפוצים" icon={Feed} />
        <NavLink to="/" label="נפץ מיתוסים" icon={Search} />
        <NavLink to="/source" label="מקורות מידע" icon={LightBulb} />
      </nav>
    </footer>
  );
}
