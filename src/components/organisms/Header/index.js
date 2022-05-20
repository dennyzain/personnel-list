import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../../hooks/useFetch';

export default function Header() {
  useFetch();
  return (
    <header>
      <nav className="flex justify-between px-5 py-3 items-center">
        <div className="flex">
          <button type="button" className="lg:hidden">
            <FontAwesomeIcon icon={faBars} color="#444444" size="lg" />
          </button>
          <img src="/logo512.png" alt="logo" className="w-28 pl-4" />
        </div>
        <div className="flex items-center">
          <p className="hidden lg:block">
            Hello, <span className="text-torquise">Gadjian User</span>
          </p>
          <img
            src="/logo192.png"
            alt="profile-user"
            className="rounded-full w-[40px] object-contain bg-black ml-3"
          />
        </div>
      </nav>
    </header>
  );
}
