import * as React from 'react';

/** Circular avatar showing an image, or initials when no image is given. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. */
  src?: string;
  alt?: string;
  /** Fallback initials when there is no image. */
  initials?: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

export declare function Avatar(props: AvatarProps): JSX.Element;
