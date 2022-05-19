import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
      <header>
        <nav className="flex justify-between p-3 items-center">
          <div className="flex">
            <button type="button">
              <FontAwesomeIcon icon={faBars} color="#444444" />
            </button>
            <img src="/logo512.png" alt="logo" className="w-28 pl-4" />
          </div>
          <img
            src="/logo192.png"
            alt="profile-user"
            className="rounded-full w-[40px] object-contain bg-black"
          />
        </nav>
      </header>
      <main className="flex">
        <aside className="w-72 px-5 hidden lg:block">
          <ul>
            <li>Beranda</li>
            <li>Personnel List</li>
            <li>Daily Attendance</li>
          </ul>
        </aside>
        <section className="bg-[#eaeaea] h-screen w-full"></section>
      </main>
    </>
  );
}

export default App;
