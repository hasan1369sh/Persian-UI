import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './CustomButton';

const meta: Meta = {
  title: 'Components/CustomButton',
  component: 'custom-button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }, // ← اضافه شد
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'outline']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  },
  args: {
    label: 'ذخیره',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button',
    icon: '',
    iconPosition: ''
  }
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => html`
  <custom-button
    label="${args.label}"
    variant="${args.variant}"
    size="${args.size}"
    ?disabled="${args.disabled}"
    ?loading="${args.loading}"
    ?fullWidth="${args.fullWidth}"
    type="${args.type}"
    icon="${args.icon}"
    iconPosition="${args.iconPosition}"
    @button-click="${(e: any) => console.log(' Button clicked:', e.detail)}"
  >
  </custom-button>
`;

export const Default: Story = { render: Template };
export const Primary: Story = { ...Default, args: { variant: 'primary' } };
export const Secondary: Story = { ...Default, args: { variant: 'secondary' } };
export const Danger: Story = { ...Default, args: { variant: 'danger' } };
export const Success: Story = { ...Default, args: { variant: 'success' } };
export const Ghost: Story = { ...Default, args: { variant: 'ghost' } };
export const Outline: Story = { ...Default, args: { variant: 'outline' } };
export const Small: Story = { ...Default, args: { size: 'small' } };
export const Large: Story = { ...Default, args: { size: 'large' } };
export const Disabled: Story = { ...Default, args: { disabled: true } };
export const Loading: Story = { ...Default, args: { loading: true } };
export const FullWidth: Story = { ...Default, args: { fullWidth: true } };

export const IconRight: Story = {
  ...Default,
  args: { label: 'جستجو', icon: '🔎', iconPosition: 'right' }
};

export const IconLeft: Story = {
  ...Default,
  args: { label: 'ذخیره', icon: '💾', iconPosition: 'left' }
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
      <h3>انواع دکمه:</h3>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <custom-button label="Primary" variant="primary"></custom-button>
        <custom-button label="Secondary" variant="secondary"></custom-button>
        <custom-button label="Danger" variant="danger"></custom-button>
        <custom-button label="Success" variant="success"></custom-button>
        <custom-button label="Ghost" variant="ghost"></custom-button>
        <custom-button label="Outline" variant="outline"></custom-button>
      </div>

      <h3>سایزها:</h3>
      <div style="display: flex; gap: 12px; align-items: center;">
        <custom-button label="Small" size="small"></custom-button>
        <custom-button label="Medium" size="medium"></custom-button>
        <custom-button label="Large" size="large"></custom-button>
      </div>

      <h3>حالت‌ها:</h3>
      <div style="display: flex; gap: 12px;">
        <custom-button label="Disabled" disabled></custom-button>
        <custom-button label="Loading" loading></custom-button>
      </div>

      <h3>با آیکون:</h3>
      <div style="display: flex; gap: 12px;">
        <custom-button label="جستجو" icon="🔎" iconPosition="right"></custom-button>
        <custom-button label="ذخیره" icon="💾" iconPosition="left"></custom-button>
        <custom-button label="حذف" icon="🗑" variant="danger"></custom-button>
      </div>

      <h3>تمام عرض:</h3>
      <custom-button label="دکمه تمام عرض" fullWidth variant="primary"></custom-button>
    </div>
  `
};
export const TestIconLeft: Story = {
  args: {
    label: 'تست آیکون چپ',
    icon: '💾',
    iconPosition: 'left',
    variant: 'primary'
  }
};

export const TestIconRight: Story = {
  args: {
    label: 'تست آیکون راست',
    icon: '🔍',
    iconPosition: 'right',
    variant: 'success'
  }
};
export const AllLabels: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 20px;">
      <custom-button label="ذخیره" variant="primary"></custom-button>
      <custom-button label="ثبت" variant="success"></custom-button>
      <custom-button label="تایید" variant="primary"></custom-button>
      <custom-button label="انصراف" variant="ghost"></custom-button>
      <custom-button label="حذف" variant="danger"></custom-button>
      <custom-button label="ویرایش" variant="outline"></custom-button>
    </div>
  `
};