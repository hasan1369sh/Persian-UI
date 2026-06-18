// src/index.ts
import './components/custom-input/CustomInput.js';
import './components/custom-button/CustomButton.js';

export { CustomInput } from './components/custom-input/CustomInput.js';
export type { CustomInputProps, InputChangeEventDetail } from './components/custom-input/types.js';

export { CustomButton } from './components/custom-button/CustomButton.js';
export type { ButtonVariant, ButtonSize, ButtonClickEventDetail } from './components/custom-button/types.js';
console.log('🎨 PersianUI loaded!');
