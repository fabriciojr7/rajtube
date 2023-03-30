import { ReactNode, useState } from 'react';
import Slick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps extends Omit<Settings, 'children'>{
  isMovieCard?: boolean
  isCastCard?: boolean
  isSessionCard?: boolean
  children?: (onSwipe: boolean) => ReactNode
}

export function Slider(props: SliderProps){
  let settings: Omit<Settings, 'children'> = {
    ...props
  };

  const [onSwipe, setOnSwipe] = useState(false);

  if(props.isMovieCard){
    settings = {
      ...settings,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    };
  }

  if(props.isCastCard){
    settings = {
      ...settings,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }
      ]
    };
  }

  if(props.isSessionCard){
    settings = {
      ...settings,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  }

  return (
    <Slick
      autoplay={false}
      autoplaySpeed={5000}
      onSwipe={() => setOnSwipe(true)}
      afterChange={() => setOnSwipe(false)}
      infinite={false}
      {...settings}
    >
      {props.children ? props.children(onSwipe) : ''}
    </Slick>
  );
}
