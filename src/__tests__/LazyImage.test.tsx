import { render, screen } from '@testing-library/react';
import LazyImage from '../shared/components/LazyImage';

describe('LazyImage', () => {
  it('renders without crashing', () => {
    render(<LazyImage src="img.jpg" alt="test" />);
    expect(screen.getByAltText('test')).toBeInTheDocument();
  });

  it('shows placeholder if provided and not visible', () => {
    render(
      <LazyImage src="img.jpg" alt="test" placeholder="placeholder.jpg" />
    );
    const img = screen.getByAltText('test');
    expect(img).toHaveAttribute('src', 'placeholder.jpg');
  });
});
