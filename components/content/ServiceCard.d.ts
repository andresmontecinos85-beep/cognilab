import * as React from 'react';

/**
 * Service / specialty card with a tinted icon tile, title and description.
 * Used for the three disciplines and for specialty areas.
 *
 * @startingPoint section="Content" subtitle="Icon tile + title + description" viewport="380x300"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node shown in the tinted tile. */
  icon?: React.ReactNode;
  /** Card title. */
  title?: React.ReactNode;
  /** Icon tile color. @default "primary" */
  tone?: 'primary' | 'accent' | 'amber';
  /** Optional footer node pinned to the bottom (e.g. a link). */
  footer?: React.ReactNode;
  /** Description body. */
  children?: React.ReactNode;
}

export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
