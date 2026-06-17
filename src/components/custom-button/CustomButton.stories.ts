import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './CustomButton';

const meta: Meta = {
  title: 'Components/CustomButton',
  component: 'custom-button',
  tags: ['autodocs'],
  argTypes: {
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
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button',
    icon: '',
    iconPosition: 'right'
  }
};

export default meta;
type Story = StoryObj;

const Template = (args: any) => html`
  <custom-button
    variant="${args.variant}"
    size="${args.size}"
    ?disabled="${args.disabled}"
    ?loading="${args.loading}"
    ?full-width="${args.fullWidth}"
    type="${args.type}"
    icon="${args.icon}"
    icon-position="${args.iconPosition}"
    @button-click="${(e: any) => console.log('🔘 Button clicked:', e.detail)}"
  >
    ${args.loading ? '' : 'کلیک کنید'}
  </custom-button>
`;

export const Default: Story = { render: Template };

export const Primary: Story = {
  ...Default,
  args: { variant: 'primary' }
};

export const Secondary: Story = {
  ...Default,
  args: { variant: 'secondary' }
};

export const Danger: Story = {
  ...Default,
  args: { variant: 'danger' }
};

export const Success: Story = {
  ...Default,
  args: { variant: 'success' }
};

export const Ghost: Story = {
  ...Default,
  args: { variant: 'ghost' }
};

export const Outline: Story = {
  ...Default,
  args: { variant: 'outline' }
};

export const Small: Story = {
  ...Default,
  args: { size: 'small' }
};

export const Large: Story = {
  ...Default,
  args: { size: 'large' }
};

export const Disabled: Story = {
  ...Default,
  args: { disabled: true }
};

export const Loading: Story = {
  ...Default,
  args: { loading: true }
};

export const FullWidth: Story = {
  ...Default,
  args: { fullWidth: true }
};

export const WithIcon: Story = {
  ...Default,
  args: { 
    icon: '🔍',
    iconPosition: 'right'
  }
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
      <h3>انواع دکمه:</h3>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <custom-button variant="primary">Primary</custom-button>
        <custom-button variant="secondary">Secondary</custom-button>
        <custom-button variant="danger">Danger</custom-button>
        <custom-button variant="success">Success</custom-button>
        <custom-button variant="ghost">Ghost</custom-button>
        <custom-button variant="outline">Outline</custom-button>
      </div>

      <h3>سایزها:</h3>
      <div style="display: flex; gap: 12px; align-items: center;">
        <custom-button size="small">Small</custom-button>
        <custom-button size="medium">Medium</custom-button>
        <custom-button size="large">Large</custom-button>
      </div>

      <h3>حالت‌ها:</h3>
      <div style="display: flex; gap: 12px;">
        <custom-button disabled>Disabled</custom-button>
        <custom-button loading>Loading</custom-button>
      </div>

      <h3>با آیکون:</h3>
      <div style="display: flex; gap: 12px;">
        <custom-button icon="🔍" icon-position="right">جستجو</custom-button>
        <custom-button icon="💾" icon-position="left">ذخیره</custom-button>
        <custom-button icon="🗑️" variant="danger">حذف</custom-button>
      </div>

      <h3>تمام عرض:</h3>
      <custom-button full-width variant="primary">دکمه تمام عرض</custom-button>
    </div>
  `
};
export const WithLabel: Story = {
  args: { label: 'ذخیره' }
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