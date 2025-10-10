
import React, { useState } from 'react';
import { ShoppingCart, Home, Tag, User, Menu, Search, MapPin, Phone, Mail, Plus, Minus, X } from 'lucide-react';
import './App.css';
import BottomNav from './components/BottomNav';

const GleamingSolutionsApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'housekeeping', name: 'House Keeping', icon: '/Housekeeping.png' },
    { id: 'laundry', name: 'Laundry Services', icon: '/laundryservices.png' },
    { id: 'specialized', name: 'Specialized Cleaning', icon: '/specializedcleaning.png' },
    { id: 'products', name: 'Cleaning Products', icon: '/cleaningproducts.png' }
  ];

  const services = [
    // House Keeping Services
    { id: 1, category: 'housekeeping', name: 'House Cleaning Per Room', price: 300, image: '/Housecleaning.png', description: 'Professional deep cleaning of your rooms including dusting, mopping, and organization' },
    { id: 2, category: 'housekeeping', name: 'Kitchen Deep Cleaning', price: 500, image: '/kitchendeepcleaning.png', description: 'Thorough kitchen cleaning including appliances, countertops, and cabinets' },
    { id: 3, category: 'housekeeping', name: 'Bathroom Cleaning', price: 350, image: '/bathroomcleaning.png', description: 'Complete bathroom sanitization and deep cleaning' },
    { id: 4, category: 'housekeeping', name: 'Office Cleaning Per Day', price: 1500, image: '/officecleaning.png', description: 'Professional office space cleaning and maintenance' },

    // Laundry Services
    { id: 5, category: 'laundry', name: 'Laundry Per Basket', price: 450, image: '/laundryservices.png', description: 'Washing, drying, and folding your laundry professionally' },
    { id: 6, category: 'laundry', name: 'Ironing Per Piece', price: 30, image: '/laundryservices.png', description: 'Professional ironing service for your garments' },
    { id: 7, category: 'laundry', name: 'Duvet Cleaning', price: 400, image: '/laundryservices.png', description: 'Deep cleaning for duvets and heavy bedding' },
    { id: 8, category: 'laundry', name: 'Curtain Cleaning Per Piece', price: 200, image: '/laundryservices.png', description: 'Professional curtain cleaning and pressing' },

    // Specialized Cleaning
    { id: 9, category: 'specialized', name: 'Carpet Cleaning Per Sqm', price: 80, image: '/carpetcleaning.png', description: 'Deep carpet shampooing and stain removal' },
    { id: 10, category: 'specialized', name: 'Sofa Cleaning Per Seat', price: 350, image: '/sofacleaning.png', description: 'Upholstery cleaning for sofas and seats' },
    { id: 11, category: 'specialized', name: 'Fumigation Service', price: 2500, image: '/fumigation.png', description: 'Professional pest control and fumigation' },
    { id: 12, category: 'specialized', name: 'Window Cleaning Per Window', price: 100, image: '/specializedcleaning.png', description: 'Inside and outside window cleaning' },

    // Cleaning Products
    { id: 13, category: 'products', name: 'All-Purpose Cleaner (5L)', price: 800, image: '/cleaningproducts.png', description: 'Industrial strength all-purpose cleaning solution' },
    { id: 14, category: 'products', name: 'Disinfectant Spray (500ml)', price: 350, image: '/cleaningproducts.png', description: 'Hospital-grade disinfectant spray' },
    { id: 15, category: 'products', name: 'Floor Cleaner (5L)', price: 650, image: '/cleaningproducts.png', description: 'Professional floor cleaning solution' },
    { id: 16, category: 'products', name: 'Glass Cleaner (1L)', price: 400, image: '/cleaningproducts.png', description: 'Streak-free glass and mirror cleaner' },
  ];

  const popularServices = services.slice(0, 4);

  const addToCart = (service) => {
    const existingItem = cart.find(item => item.id === service.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  /* Pages */
  const HomePage = () => (
    <div className="container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Welcome Back!</h1>
        <p style={{ color: '#4b5563' }}>Find the perfect cleaning service for your needs</p>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="search-wrap">
          <Search style={{ color: '#9ca3af', marginRight: '0.75rem' }} size={22} />
          <label htmlFor="search" className="sr-only">Search services</label>
          <input id="search" type="text" placeholder="Search for services..." className="search-input" />
        </div>
      </div>

      {/* Categories */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Service Categories</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage('services');
              }}
              className="card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                border: 'none',
                padding: 0
              }}
            >
              <div style={{ width: '100%', height: '12rem', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img src={cat.icon} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#374151' }}>{cat.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Services */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Most Popular Services</h2>
        <div className="popular-grid">
          {popularServices.map(service => (
            <div key={service.id} className="card-hover">
              <div style={{ width: '100%', height: '16rem', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.5rem' }}>{service.name}</h3>
                <p style={{ fontSize: '.95rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.6 }}>{service.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.5rem' }}>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>KSh{service.price}</p>
                  <button
                    onClick={() => addToCart(service)}
                    style={{ backgroundColor: '#fbbf24', color: '#1f2937', padding: '.7rem 1.25rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '.5rem', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fbbf24'}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info Banner */}
      <div style={{ background: 'linear-gradient(to right, #3b82f6, #1d4ed8)', borderRadius: '12px', padding: '1.25rem', color: 'white', maxWidth: '64rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Need Assistance?</h3>
        <div className="contact-grid">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <Phone size={20} />
            <div>
              <p style={{ fontSize: '.75rem', color: '#dbeafe' }}>Phone</p>
              <p style={{ fontWeight: 600 }}>0768831141</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <Mail size={20} />
            <div>
              <p style={{ fontSize: '.75rem', color: '#dbeafe' }}>Email</p>
              <p style={{ fontWeight: 600, fontSize: '.9rem' }}>gleamingsolutions77@gmail.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <MapPin size={20} />
            <div>
              <p style={{ fontSize: '.75rem', color: '#dbeafe' }}>Location</p>
              <p style={{ fontWeight: 600 }}>Coffee Plaza, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.3rem' }}>Our Services</h1>
        <p style={{ color: '#4b5563' }}>Browse our comprehensive range of cleaning services</p>
      </div>

      <div className="filters-row" style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '.65rem 1.2rem',
            borderRadius: '12px',
            fontWeight: 600,
            backgroundColor: selectedCategory === 'all' ? '#2563eb' : 'white',
            color: selectedCategory === 'all' ? 'white' : '#374151',
            border: '1px solid #e5e7eb',
            cursor: 'pointer'
          }}
        >
          All Services
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '.65rem 1.2rem',
              borderRadius: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              backgroundColor: selectedCategory === cat.id ? '#2563eb' : 'white',
              color: selectedCategory === cat.id ? 'white' : '#374151',
              border: '1px solid #e5e7eb',
              cursor: 'pointer'
            }}
          >
            <img src={cat.icon} alt={cat.name} style={{ width: '2rem', height: '2rem', objectFit: 'contain' }} />
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="card-hover">
            <div style={{ width: '100%', height: '14rem', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
              <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '1.15rem', marginBottom: '.4rem' }}>{service.name}</h3>
              <p style={{ fontSize: '.9rem', color: '#6b7280', marginBottom: '.8rem', lineHeight: 1.5 }}>{service.description}</p>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '.8rem' }}>KSh{service.price}</p>
              <button
                onClick={() => addToCart(service)}
                style={{ width: '100%', backgroundColor: '#fbbf24', color: '#1f2937', padding: '.85rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fbbf24'}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CartPage = () => (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.3rem' }}>Shopping Cart</h1>
        <p style={{ color: '#4b5563' }}>Review your selected services</p>
      </div>

      {cart.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.5rem' }}>Your cart is empty</h2>
          <p style={{ color: '#6b7280', marginBottom: '1.25rem', fontSize: '1rem', textAlign: 'center' }}>Add some services to get started!</p>
          <button
            onClick={() => setCurrentPage('home')}
            style={{ backgroundColor: '#2563eb', color: 'white', padding: '.9rem 1.5rem', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer' }}
          >
            Browse Services
          </button>
        </div>
      ) : (
        <div className="cart-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cart.map(item => (
              <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '6.5rem', height: '6.5rem', objectFit: 'contain' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.25rem' }}>{item.name}</h3>
                    <p style={{ color: '#6b7280' }}>KSh{item.price} each</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ color: '#ef4444', padding: '.4rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <X size={22} />
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{ backgroundColor: '#e5e7eb', padding: '.6rem', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
                    >
                      <Minus size={18} />
                    </button>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', width: '2.5rem', textAlign: 'center' }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{ backgroundColor: '#2563eb', color: 'white', padding: '.6rem', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    KSh{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky-summary">
            <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Order Summary</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                  <span style={{ color: '#4b5563' }}>Subtotal:</span>
                  <span style={{ fontWeight: 600 }}>KSh{getTotal()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' }}>
                  <span style={{ color: '#4b5563' }}>Service Fee:</span>
                  <span style={{ fontWeight: 600 }}>KSh50</span>
                </div>
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2563eb' }}>KSh{getTotal() + 50}</span>
                </div>
              </div>

              <button style={{ width: '100%', background: 'linear-gradient(to right, #2563eb, #1e40af)', color: 'white', padding: '.9rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const ProfilePage = () => (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.3rem' }}>Profile</h1>
        <p style={{ color: '#4b5563' }}>Manage your account and preferences</p>
      </div>

      <div className="services-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '6rem', height: '6rem', background: 'linear-gradient(to bottom right, #3b82f6, #1d4ed8)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                👤
              </div>
              <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '.7rem 1.25rem', borderRadius: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                Login / Sign Up
              </button>
            </div>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '.9rem' }}>Sign in to access your orders and save your preferences</p>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '.8rem' }}>Company Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.75rem', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                <Phone size={20} style={{ color: '#2563eb' }} />
                <div>
                  <p style={{ fontSize: '.75rem', color: '#6b7280' }}>Phone</p>
                  <p style={{ fontWeight: 600 }}>0768831141</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.75rem', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                <Mail size={20} style={{ color: '#2563eb' }} />
                <div>
                  <p style={{ fontSize: '.75rem', color: '#6b7280' }}>Email</p>
                  <p style={{ fontWeight: 600, fontSize: '.9rem' }}>gleamingsolutions77@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.75rem', backgroundColor: '#f9fafb', borderRadius: '10px' }}>
                <MapPin size={20} style={{ color: '#2563eb' }} />
                <div>
                  <p style={{ fontSize: '.75rem', color: '#6b7280' }}>Location</p>
                  <p style={{ fontWeight: 600 }}>Coffee Plaza, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {['Price Guide', 'FAQs', 'Contact Us', 'About Us', 'Terms & Conditions', 'Privacy Policy'].map(item => (
            <button
              key={item}
              style={{ width: '100%', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ fontWeight: 600, color: '#1f2937', fontSize: '1.05rem' }}>{item}</span>
              <span style={{ color: '#9ca3af', fontSize: '1.5rem' }}>›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const TopBar = () => {
    const navButtonStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      padding: '.6rem 1rem',
      borderRadius: '8px',
      transition: 'all .2s',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      background: 'transparent',
      color: '#fff'
    };

    const NavButton = ({ page, icon, text, badge }) => {
      const isActive = currentPage === page;
      return (
        <button
          onClick={() => page && setCurrentPage(page)}
          style={{
            ...navButtonStyle,
            backgroundColor: isActive ? 'rgba(255,255,255,.15)' : 'transparent',
            color: isActive ? '#fff' : '#fff',
          }}
        >
          {icon}
          {text && <span className="hide-sm">{text}</span>}
          {badge}
        </button>
      );
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
      <header className="topbar">
        <div className="topbar-title">Gleaming Solutions</div>
        <nav className="topbar-nav">
          <NavButton page="home" icon={<Home size={18} />} text="Home" />
          <NavButton page="services" icon={<Menu size={18} />} text="Services" />
          <NavButton page="cart" icon={<ShoppingCart size={18} />} text="Cart" badge={cartCount > 0 && (
            <span style={{
              marginLeft: '.25rem',
              backgroundColor: '#ec4899',
              color: 'white',
              fontSize: '.75rem',
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>{cartCount}</span>
          )} />
          <NavButton icon={<Tag size={18} />} text="Offers" />
          <NavButton page="profile" icon={<User size={18} />} text="Profile" />
        </nav>
      </header>
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app">
      <TopBar />

      {/* Main Content */}
      <main className="main">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </main>

      {/* Mobile bottom navigation */}
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} cartCount={cartCount} />
    </div>
  );
};

export default GleamingSolutionsApp;
