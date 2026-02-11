
import React, { useState } from 'react';
import { Language, User, Product } from './types';
import Layout from './components/Layout';
import Home from './views/Home';
import Auth from './views/Auth';
import ProductDetail from './views/ProductDetail';
import Support from './views/Support';
import Admin from './views/Admin';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAuthSuccess = (role: 'BUYER' | 'SELLER' | 'ADMIN') => {
    setUser({
      id: 'u1',
      fullName: 'Ahmed Test',
      email: 'test@dztech.com',
      role,
      address: 'Algiers, Algeria'
    });
    setView('home');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home lang={lang} onProductClick={handleProductClick} />;
      case 'auth':
        return <Auth lang={lang} onSuccess={handleAuthSuccess} />;
      case 'detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            lang={lang} 
            onBuy={() => setView('home')} 
          />
        ) : null;
      case 'support':
        return <Support lang={lang} />;
      case 'admin':
        return user?.role === 'ADMIN' ? <Admin /> : <Home lang={lang} onProductClick={handleProductClick} />;
      default:
        return <Home lang={lang} onProductClick={handleProductClick} />;
    }
  };

  return (
    <Layout lang={lang} setLang={setLang} user={user} onNavigate={setView}>
      {renderView()}
    </Layout>
  );
};

export default App;
