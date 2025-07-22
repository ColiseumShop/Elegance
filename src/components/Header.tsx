import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Vestidos', href: '/category/vestidos' },
    { name: 'Blusas', href: '/category/blusas' },
    { name: 'Calças', href: '/category/calcas' },
    { name: 'Acessórios', href: '/category/acessorios' },
    { name: 'Sale', href: '/sale' },
  ];

  return (
    <header className="border-b border-border sticky top-0 z-50" style={{ background: '#e9aeb6' }}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="hidden md:block">
            Frete grátis para compras acima de R$ 299
          </div>
          <div className="flex items-center gap-4">
            <span>Atendimento: (11) 9999-9999</span>
          </div>
        </div>

        {/* Logo centralizada */}
        <div className="flex flex-col items-center py-6">
          <img 
            src="/src/assets/elegance-boutique-logo.png" 
            alt="Elegance Boutique"
            className="h-32 w-auto max-w-2xl mx-auto object-contain p-2 rounded shadow-lg"
            style={{ background: '#e9aeb6' }}
          />
        </div>

        {/* Navegação centralizada abaixo da logo */}
        <nav className="flex justify-center items-center space-x-8 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-primary transition-colors font-medium text-lg"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right side icons (mantém no topo, canto direito) */}
        <div className="absolute right-4 top-8 flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => window.location.href = '/cart'}
            aria-label="Ver carrinho"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;