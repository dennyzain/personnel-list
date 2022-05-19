import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card() {
  return (
    <div className="rounded-xl bg-white m-4 py-2 ">
      <div className="flex items-center justify-between px-5 border-b-2 border-[#eeeeee]">
        <p>
          Personnel ID: <span className="text-torquise">123456</span>
        </p>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </div>
      <div className="py-5 flex items-center justify-center">
        {' '}
        <img
          src="/logo192.png"
          alt="profile-user"
          className="rounded-full w-[80px] h-[80px] object-contain bg-black"
        />
        <div className="pl-7">
          <h4>Name</h4>
          <p>First Name Last Name</p>
          <h4>Telephone</h4>
          <p>Phone Number</p>
        </div>
      </div>
    </div>
  );
}
