import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './CustomInput';

const meta: Meta = {
  title: 'Components/CustomInput',
  component: 'custom-input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'tel'] },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' }
  },
  args: {
    label: 'نام کاربری',
    placeholder: 'مثال: ali_rezaei',
    value: '',
    type: 'text',
    readonly: false,
    disabled: false,
    required: false
  }
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => html`
  <custom-input
    label="${args.label}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    type="${args.type}"
    ?readonly="${args.readonly}"
    ?disabled="${args.disabled}"
    ?required="${args.required}"
    @input-change="${(e: any) => console.log('📤 Output Event:', e.detail)}"
  ></custom-input>
`;

export const Default: Story = { render: Template };

export const ReadonlyMode: Story = {
  ...Default,
  args: { readonly: true, value: 'مقدار ثابت (فقط خواندنی)' }
};

export const DisabledMode: Story = {
  ...Default,
  args: { disabled: true, value: 'غیرفعال شده' }
};

export const PasswordField: Story = {
  ...Default,
  args: { type: 'password', label: 'رمز عبور', placeholder: '••••••••' }
};