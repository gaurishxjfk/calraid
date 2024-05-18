import Layout from "./Layout";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="h-[10em] w-[5em] sm:h-[20em] sm:w-[15em] md:h-[20em] md:w-[15em] lg:h-[30em] lg:w-[30%] bg-gradient-to-br from-[#8fa895] to-[#628068] absolute right-0 top-0 z-0"></div>
      <Navbar />
      <Layout />
    </>
  );
}

export default App;
