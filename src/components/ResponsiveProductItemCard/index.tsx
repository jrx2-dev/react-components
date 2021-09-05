import React, { createRef } from 'react';
import { ProductItem } from '../../models/interfaces';
import { useResponsiveClass } from '@jrx2-dev/use-responsive-class';
import { useFadeOnSizeChange } from '../../hooks/useFadeOnSizeChange';
import ResponsiveProductItemCardView from './view';
import 'react-lazy-load-image-component/src/effects/blur.css';

export interface ResponsiveProductItemCardProps {
  productItem: ProductItem;
  onSelect: (id: number) => void;
  action?: string;
}

const ResponsiveProductItemCard = (props: ResponsiveProductItemCardProps) => {
  const cardRef = createRef<HTMLDivElement>();
  const [newSizeClass] = useResponsiveClass(cardRef);
  const [sizeClass, animationClass] = useFadeOnSizeChange(newSizeClass);

  return (
    <ResponsiveProductItemCardView
      {...props}
      cardRef={cardRef}
      sizeClass={sizeClass}
      animationClass={animationClass}
    />
  );
};

export default ResponsiveProductItemCard;
