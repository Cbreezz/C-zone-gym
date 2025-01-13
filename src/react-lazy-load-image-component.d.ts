declare module 'react-lazy-load-image-component' {
    export const LazyLoadImage: React.FC<{
      src: string;
      alt: string;
      effect?: string;
      className?: string;
    }>;
  
    export const trackWindowScroll: <T>(Component: T) => T;
  }
  