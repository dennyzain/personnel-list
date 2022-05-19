import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from '../../molecules/Card';

export default function Content() {
  return (
    <main className="flex">
      <aside className="w-72 px-5 hidden lg:block">
        <ul>
          <li>Beranda</li>
          <li>Personnel List</li>
          <li>Daily Attendance</li>
        </ul>
      </aside>
      <section className="bg-[#eaeaea]  w-full">
        <div className="bg-white m-4 p-5 box-border flex flex-col">
          <h1 className="text-torquise text-xl font-bold">PERSONNEL LIST</h1>
          <p className="text-[#444444]">List of all personnels</p>
          <input
            type="text"
            placeholder="Find Personnels"
            className="p-2 my-2 border border-[#444444]"
          />
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} color="white" /> */}
          <button type="button" className="flex items-center justify-between bg-torquise p-3">
            <p className="text-white font-bold pr-3">ADD PERSONNEL</p>
            <FontAwesomeIcon icon={faPlus} color="white" />
          </button>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
