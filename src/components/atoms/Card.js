import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card() {
  return (
    <div className="rounded-xl bg-white mx-4 mt-4 py-2 lg:min-w-[250px] lg:min-h-[auto] ">
      <div className="flex items-center justify-between px-5 border-b-2 border-[#eeeeee]">
        <p>
          Personnel ID: <span className="text-torquise">123456</span>
        </p>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </div>
      <div className="py-5 flex flex-row items-center justify-center md:flex-col">
        {' '}
        <img
          src="/logo192.png"
          alt="profile-user"
          className="rounded-full w-[80px] h-[80px] object-contain bg-black lg:w-[140px] lg:h-[140px] lg:mb-5"
        />
        <div className="pl-7 lg:text-left lg:pl-0">
          <h4>Name</h4>
          <p>First Name Last Name</p>
          <h4>Telephone</h4>
          <p>Phone Number</p>
        </div>
      </div>
    </div>
  );
}
