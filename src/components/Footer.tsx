import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '/about' },
      { name: 'Carreiras', href: '/careers' },
      { name: 'Imprensa', href: '/press' },
      { name: 'Sustentabilidade', href: '/sustainability' }
    ],
    help: [
      { name: 'Central de Ajuda', href: '/help' },
      { name: 'Trocas e Devoluções', href: '/returns' },
      { name: 'Guia de Tamanhos', href: '/size-guide' },
      { name: 'Cuidados com as Peças', href: '/care-guide' }
    ],
    policies: [
      { name: 'Política de Privacidade', href: '/privacy' },
      { name: 'Termos de Uso', href: '/terms' },
      { name: 'Política de Cookies', href: '/cookies' },
      { name: 'Política de Frete', href: '/shipping' }
    ]
  };

  return (
    <footer className="bg-boutique-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/24912b3a-6a74-47dd-a824-670034ccc6b6.png" 
              alt="Elegance Boutique"
              className="h-16 mb-4 object-contain filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Sua boutique online de moda feminina sofisticada. 
              Peças únicas para mulheres que valorizam elegância e qualidade.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-boutique-gold" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-boutique-gold" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-boutique-gold" />
                <span className="text-gray-300">contato@eleganceboutique.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-boutique-gold/20">
                <Instagram size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-boutique-gold/20">
                <Facebook size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-boutique-gold/20">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-boutique-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Ajuda</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-boutique-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Políticas</h3>
            <ul className="space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-boutique-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
              <div className="flex gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">MASTER</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">PIX</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">BOLETO</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Segurança</h4>
              <div className="flex gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">SSL</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-gray-800">256-BIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Elegance Boutique. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;