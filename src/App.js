import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Overview, Revenue, Users } from './pages/Overview';
import Products from './pages/Products';
import { Reports, ReportsOne, ReportThree, ReportTwo } from './pages/Reports';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="overview" element={<Overview />} />
            <Route path="overview/users" element={<Users />} />
            <Route path="overview/revenue" element={<Revenue />} />
            <Route path="reports" element={<Reports />} />
            <Route path="reports/reports1" element={<ReportsOne />} />
            <Route path="reports/reports2" element={<ReportTwo />} />
            <Route path="reports/reports3" element={<ReportThree />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
