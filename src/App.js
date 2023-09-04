import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperherosPage from "./components/Superheros.page";
import RQPage from "./components/RQ.page";
import { QueryClient, QueryClientProvider } from "react-query";
import SuperHeroDetails from "./components/SuperHeroDetails.page";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallelQuries from "./components/DynamicParallelQuries";
import SequentialQueries from "./components/SequentialQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <nav style={{backgroundColor: 'antiquewhite'}}>
      <NavLink style={{margin: '20px'}} to='/'>Home</NavLink>
      <NavLink style={{margin: '20px'}} to='/superheros'>Superheros</NavLink>
      <NavLink style={{margin: '20px'}} to='/rq-superheros'>RQ Superheros</NavLink>
      <NavLink style={{margin: '20px'}} to='/parallelQuries'>ParallelQuries</NavLink>
      <NavLink style={{margin: '20px'}} to='/dynamicParallelQuries'>DynamicParallelQuries</NavLink>
      <NavLink style={{margin: '20px'}} to='/sequentialQuries'>SequentialQuries</NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="superheros" element={<SuperherosPage />} />
        <Route path="rq-superheros" element={<RQPage />} />
        <Route path="rq-superheros/:id" element={<SuperHeroDetails />} />
        <Route path="parallelQuries" element={<ParallelQueries />} />
        <Route path="dynamicParallelQuries" element={<DynamicParallelQuries herosId={[1, 2]}/>} />
        <Route path="sequentialQuries" element={<SequentialQueries email='sample@gmail.com'/>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
