import React, { RefObject } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getResponsiveClass } from '../../helpers/mediaBreakpoints';
import { ResponsiveProductItemCardProps } from '.';
import styles from './styles.module.scss';
import fadeAnimation from '../../theme/fadeAnimation.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

export interface ResponsiveProductItemCardViewProps
  extends ResponsiveProductItemCardProps {
  cardRef?: RefObject<HTMLDivElement>;
  sizeClass?: string;
  animationClass?: string;
}

const DEFAULT_ACTION = 'Select';

export const ResponsiveProductItemCardView = (
  props: ResponsiveProductItemCardViewProps
) => {
  const {
    productItem,
    onSelect,
    action = DEFAULT_ACTION,
    cardRef,
    sizeClass,
    animationClass,
  } = props;

  const responsiveClass = getResponsiveClass(styles, sizeClass || '');

  return (
    <div
      className={`${sizeClass && styles.root} ${responsiveClass} ${
        fadeAnimation[animationClass || '']
      }`}
      ref={cardRef}
    >
      {sizeClass && (
        <>
          <div className={`${styles.imageContainer} ${responsiveClass}`}>
            <LazyLoadImage
              wrapperClassName={styles.imageLazyWrapper}
              className={`${styles.image} ${responsiveClass}}`}
              alt={productItem.title}
              effect="blur"
              src={productItem.imgUrl}
            />
          </div>
          <div className={`${styles.infoContainer} ${responsiveClass}`}>
            <div className={`${styles.infoDetails} ${responsiveClass}`}>
              <div className={`${styles.requiredDetails} ${responsiveClass}`}>
                <div className={styles.itemTitle}>{productItem.title}</div>
                <div className={`${styles.itemPrice} ${responsiveClass}`}>
                  {productItem.price}
                </div>
              </div>
              {productItem.description && (
                <div className={`${styles.itemDescription} ${responsiveClass}`}>
                  {productItem.description}
                </div>
              )}
            </div>
            <div className={`${styles.buttonContainer} ${responsiveClass}`}>
              <button
                className={`${styles.button} ${responsiveClass}`}
                onClick={() => onSelect(productItem.id)}
              >
                {action}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResponsiveProductItemCardView;
