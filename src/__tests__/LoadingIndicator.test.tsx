import { render, screen } from '@testing-library/react';
import LoadingIndicator from '../shared/components/LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders without crashing', () => {
    render(<LoadingIndicator />);
    expect(screen.getByText(/Загрузка данных/i)).toBeInTheDocument();
  });
});
