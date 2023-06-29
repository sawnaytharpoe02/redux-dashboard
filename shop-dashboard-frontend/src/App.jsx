import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Category from './pages/Category';
import Order from './pages/Order';
import Customer from './pages/Customer';
import Products from './pages/Products';
import { store } from './store';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
