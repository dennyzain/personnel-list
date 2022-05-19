import { faCalendarDays, faHouseChimney, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar() {
  return (
    <aside className="w-72 mt-4 px-5 hidden lg:flex">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouseChimney} className="px-2 mr-2" />
          <span>Beranda</span>
        </li>
        <li className="text-torquise">
          {' '}
          <FontAwesomeIcon icon={faUsers} className="px-2 mr-1" />
          <span>Personnel List</span>
        </li>
        <li>
          {' '}
          <FontAwesomeIcon icon={faCalendarDays} className="px-2 mr-2" />
          <span>Daily Attendance</span>
        </li>
      </ul>
    </aside>
  );
}
