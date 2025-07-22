import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const product = {
  id: '1',
  name: 'Vestido Midi Elegante Rosé',
  price: 189.90,
  image: 'https://i.ibb.co/0VVKNQNM/Vestido-Midi-Elegante-Ros.jpg',
  category: 'vestidos',
};

describe('ProductCard', () => {
  it('deve renderizar nome, preço e imagem do produto', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Vestido Midi Elegante Rosé')).toBeInTheDocument();
    expect(screen.getByText(/189/)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.image);
  });

  it('não deve ter violações de acessibilidade básicas', async () => {
    const { container } = render(<ProductCard product={product} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 