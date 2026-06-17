import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-button')
export class CustomButton extends LitElement {
  @property({ type: String }) label = ''; // ← اضافه شد
  @property({ type: String }) variant: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'outline' = 'primary';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) fullWidth = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--pui-font-family);
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--pui-space-sm, 8px);
      border: none;
      border-radius: var(--pui-radius-md, 8px);
      font-weight: 400;
      cursor: pointer;
      transition: var(--pui-transition-normal, 200ms ease);
      font-family: inherit;
      direction: rtl;
      position: relative;
      overflow: hidden;
    }

    button:focus-visible {
      outline: none;
      box-shadow: var(--pui-shadow-focus, 0 0 0 3px rgba(59, 130, 246, 0.3));
    }

    button:active:not(:disabled) {
      transform: scale(0.98);
    }

    .small {
      padding: var(--pui-space-xs, 4px) var(--pui-space-sm, 8px);
      font-size: var(--pui-font-size-xs, 12px);
      min-height: 32px;
    }

    .medium {
      padding: var(--pui-space-sm, 8px) var(--pui-space-md, 16px);
      font-size: var(--pui-font-size-sm, 14px);
      min-height: 40px;
    }

    .large {
      padding: var(--pui-space-md, 16px) var(--pui-space-lg, 24px);
      font-size: var(--pui-font-size-md, 16px);
      min-height: 48px;
    }

    .primary {
      background-color: var(--pui-color-primary-500, #3b82f6);
      color: var(--pui-text-inverse, #ffffff);
    }
    .primary:hover:not(:disabled) {
      background-color: var(--pui-color-primary-600, #2563eb);
    }

    .secondary {
      background-color: var(--pui-color-neutral-500, #6b7280);
      color: var(--pui-text-inverse, #ffffff);
    }
    .secondary:hover:not(:disabled) {
      background-color: var(--pui-color-neutral-600, #4b5563);
    }

    .danger {
      background-color: var(--pui-color-danger-500, #ef4444);
      color: var(--pui-text-inverse, #ffffff);
    }
    .danger:hover:not(:disabled) {
      background-color: var(--pui-color-danger-600, #dc2626);
    }

    .success {
      background-color: var(--pui-color-success-500, #10b981);
      color: var(--pui-text-inverse, #ffffff);
    }
    .success:hover:not(:disabled) {
      background-color: var(--pui-color-success-600, #059669);
    }

    .ghost {
      background-color: transparent;
      color: var(--pui-text-primary, #111827);
    }
    .ghost:hover:not(:disabled) {
      background-color: var(--pui-color-neutral-100, #f3f4f6);
    }

    .outline {
      background-color: transparent;
      color: var(--pui-text-primary, #111827);
      border: 1px solid var(--pui-border-default, #d1d5db);
    }
    .outline:hover:not(:disabled) {
      background-color: var(--pui-bg-secondary, #f9fafb);
    }

    button:disabled {
      background-color: var(--pui-bg-disabled, #e5e7eb);
      color: var(--pui-text-disabled, #9ca3af);
      cursor: not-allowed;
      opacity: 0.7;
    }

    .full-width {
      width: 100%;
    }

    .loading .default-content { display: none; }
    .loading .loading-content { display: inline-flex; }
    .loading-content { display: none; }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  render() {
    const classes = [
      this.variant,
      this.size,
      this.fullWidth ? 'full-width' : '',
      this.loading ? 'loading' : ''
    ].filter(Boolean).join(' ');

    return html`
      <button
        class=${classes}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this._handleClick}
      >
        <span class="loading-content">
          <span class="spinner"></span>
        </span>
        <span class="default-content">
          ${this.label ? this.label : html`<slot></slot>`}
        </span>
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('button-click', {
        detail: { variant: this.variant, label: this.label },
        bubbles: true,
        composed: true
      })
    );
  }
}