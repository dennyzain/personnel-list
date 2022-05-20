import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from './Typography';

export default function Card(props) {
  const { id, picture } = props;
  return (
    <div className="rounded-xl bg-white mx-4 mt-4 py-2 min-w-[290px]  lg:min-w-[250px] lg:min-h-[400px]">
      <div className="flex items-center justify-between px-5 border-b-2 border-[#eeeeee]">
        <p className="text-sm">
          Personnel ID: <span className="text-torquise">{id.value}</span>
        </p>
        <FontAwesomeIcon icon={faEllipsis} size="2x" />
      </div>
      <div className="py-5 flex flex-row px-5 md:flex-col">
        {' '}
        <img
          src={picture.medium}
          alt="profile-user"
          className="rounded-full w-[80px] h-[80px] object-contain bg-black lg:w-[140px] lg:h-[140px] lg:mb-5 lg:self-center"
        />
        <div className="pl-7 lg:text-left lg:pl-0">
          <Typography {...props} />
        </div>
      </div>
    </div>
  );
}
