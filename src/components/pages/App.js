function App() {
  return (
    <>
      <header>
        <div className="flex justify-between px-5 py-3 items-center">
          <img src="/logo512.png" width={128} alt="logo" />
          <p className="">
            Hallo, <span className="text-cyan-600">Gadjian User</span>
          </p>
        </div>
      </header>
      <main className="flex">
        <aside className="w-72 px-5">
          <ul>
            <li>Beranda</li>
            <li>Personnel List</li>
            <li>Daily Attendance</li>
          </ul>
        </aside>
        <section className="bg-[#eaeaea] h-screen w-full">
          <div className="p-5 m-5 flex justify-between bg-white">
            <div className="flex">
              <h1>PERSONNEL LIST</h1>
              <h3>List of Personnels</h3>
            </div>
            <div className="flex">
              <form>
                <input type="text" placeholder="Find Personnels" />
              </form>
              <button type="button">ADD PERSONNEL +</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
