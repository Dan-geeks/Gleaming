
import React from 'react';
import { Home, Menu, ShoppingCart, User } from 'lucide-react';

export default function BottomNav({ currentPage, setCurrentPage, cartCount = 0 }){
  const Item = ({ id, icon, label }) => {
    const active = currentPage === id;
    return (
      <button
        onClick={() => setCurrentPage(id)}
        className={active ? 'active' : ''}
        style={{ position: 'relative' }}
      >
        {icon}
        <span style={{ fontSize: 11 }}>{label}</span>
        {id === 'cart' && cartCount > 0 && (
          <span className="badge">{cartCount}</span>
        )}
      </button>
    );
  };

  return (
    <nav className="bottom-nav">
      <Item id="home" icon={<Home size={20} />} label="Home" />
      <Item id="services" icon={<Menu size={20} />} label="Services" />
      <Item id="cart" icon={<ShoppingCart size={20} />} label="Cart" />
      <Item id="profile" icon={<User size={20} />} label="Profile" />
    </nav>
  );
}
