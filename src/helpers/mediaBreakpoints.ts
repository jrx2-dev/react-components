import { styles as IStyles } from '../models/interfaces';

const getResponsiveClass = (styles: IStyles, currentSizeClass: string) => {
  return styles[currentSizeClass];
};

export { getResponsiveClass };
