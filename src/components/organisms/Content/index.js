import Sidebar from '../../molecules/Sidebar';
import Slider from '../../molecules/Slider';
import Search from '../../molecules/Search';

export default function Content() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="bg-[#eaeaea] w-full md:h-screen lg:w-4/5">
        <Search />
        <Slider />
      </section>
    </main>
  );
}
