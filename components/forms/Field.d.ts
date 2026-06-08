import * as React from 'react';

/** Labeled field wrapper that pairs a control with a label and hint/error text. */
export interface FieldProps {
  /** Field label text. */
  label?: React.ReactNode;
  /** id of the control this label points to. */
  htmlFor?: string;
  /** Show a coral required asterisk. */
  required?: boolean;
  /** Helper text shown below the control. */
  hint?: React.ReactNode;
  /** Error text — overrides hint and turns the control red. */
  error?: React.ReactNode;
  className?: string;
  /** The control (Input, Textarea, Select…). */
  children?: React.ReactNode;
}

export declare function Field(props: FieldProps): JSX.Element;
