export interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel';
  name?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export interface InputChangeEventDetail {
  value: string;
  name?: string;
}