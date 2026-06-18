export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonClickEventDetail {
  variant: ButtonVariant;
  type: 'button' | 'submit' | 'reset';
}