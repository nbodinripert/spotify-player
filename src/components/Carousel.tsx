import { FunctionComponent } from 'react';
import { default as MultipleItemsCarousel } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  items: unknown[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousel: FunctionComponent<CarouselProps> = ({ items }) => {
  return (
    <MultipleItemsCarousel responsive={responsive}>
      {items}
    </MultipleItemsCarousel>
  );
};

export default Carousel;
