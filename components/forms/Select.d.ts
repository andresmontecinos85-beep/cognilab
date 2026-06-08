import * as React from 'react';

/** Native select with a custom chevron, styled to the CogniLab system. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): JSX.Element;
