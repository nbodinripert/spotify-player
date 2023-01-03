import { FunctionComponent } from 'react';
import { default as MultipleItemsCarousel } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CAROUSEL_RESPONSIVE } from '../../constants/carousel.constant';
import './Carousel.css';

interface CarouselProps {
  title: string;
  items: unknown[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ title, items }) => {
  //#region [render]
  return (
    <div>
      <p className='carousel-title'>{title}</p>
      <MultipleItemsCarousel responsive={CAROUSEL_RESPONSIVE}>
        {items}
      </MultipleItemsCarousel>
    </div>
  );
  //#endregion
};

export default Carousel;
