import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

const breed = {
  weight: {
    imperial: '40 - 65',
    metric: '18 - 29',
  },
  height: {
    imperial: '21 - 23',
    metric: '53 - 58',
  },
  id: 4,
  name: 'Airedale Terrier',
  bred_for: 'Badger, otter hunting',
  breed_group: 'Terrier',
  life_span: '10 - 13 years',
  temperament: 'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
  origin: 'United Kingdom, England',
  reference_image_id: '1-7cgoZSh',
};

describe('Card', () => {
  test('renders', () => {
    const { container: result } = render(<Card breed={breed} isFavorite handleFavoriteChange={() => true} />);

    expect(screen.getByText(breed.name)).toBeDefined();

    expect(result).toMatchSnapshot();
  });
});
