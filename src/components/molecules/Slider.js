import useFetch from '../../hooks/useFetch';
import Card from '../atoms/Card';

export default function Slider() {
  const data = useFetch();
  return (
    <div className="relative flex flex-col md:flex-row">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
