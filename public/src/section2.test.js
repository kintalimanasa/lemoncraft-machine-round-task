import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Section1 from './section2';

describe('Section2', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Section1 />);
    expect(getByText('Section 2')).toBeInTheDocument();
  });
});