import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card-product group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={320}
          height={320}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-boutique-gold text-boutique-charcoal">
              Novo
            </Badge>
          )}
          {product.isOnSale && discountPercentage > 0 && (
            <Badge className="bg-primary text-primary-foreground">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Quick action buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
            aria-label="Adicionar aos favoritos"
          >
            <Heart size={18} />
          </Button>
        </div>

        {/* Add to cart overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button className="w-full btn-primary">
            <ShoppingBag size={18} className="mr-2" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <h3 className="font-playfair text-lg font-semibold mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;