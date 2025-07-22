import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import heroImage from '@/assets/hero-image.jpg';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useStore } from '@/lib/store';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { products, categories, loading, setProducts, setCategories, setLoading } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Buscar produtos
      const productsSnapshot = await getDocs(collection(db, 'products'));
      const products = productsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          price: data.price || 0,
          image: data.image || '',
          category: data.category || '',
          ...data
        };
      });
      setProducts(products);
      // Buscar categorias
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      let cats = categoriesSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          image: data.image || '',
          ...data
        };
      });
      setCategories(cats);
      setLoading(false);
    };
    fetchData();
  }, [setProducts, setCategories, setLoading]);

  const features = [
    {
      icon: Truck,
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 299'
    },
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Pagamentos protegidos'
    },
    {
      icon: Headphones,
      title: 'Atendimento',
      description: 'Suporte especializado'
    },
    {
      icon: Star,
      title: 'Qualidade',
      description: 'Produtos selecionados'
    }
  ];

  if (loading) return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  const featuredProducts = products;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Elegance Boutique | Moda Feminina</title>
        <meta name="description" content="Descubra as últimas tendências em moda feminina na Elegance Boutique. Vestidos, blusas, calças e acessórios com elegância e estilo." />
        <meta property="og:title" content="Elegance Boutique | Moda Feminina" />
        <meta property="og:description" content="Descubra as últimas tendências em moda feminina na Elegance Boutique." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/30" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Elegância que
            <span className="block text-gradient">Inspira</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra peças únicas que realçam sua beleza natural. 
            Moda feminina sofisticada para mulheres que sabem o que querem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Ver Coleção
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Ofertas Especiais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Icon size={24} className="text-boutique-charcoal" />
                  </div>
                  <h3 className="font-playfair font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Nossas Categorias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa seleção cuidadosamente curada de peças para cada ocasião
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-boutique-charcoal/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-boutique-charcoal hover:bg-white"
                    >
                      Ver Mais
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peças selecionadas especialmente para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-primary text-lg px-8 py-4">
              Ver Todos os Produtos
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Fique por Dentro das Novidades
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Receba em primeira mão nossas promoções e lançamentos exclusivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button className="btn-primary px-8">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;