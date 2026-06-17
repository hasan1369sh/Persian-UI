import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('custom-input')
export class CustomInput extends LitElement {
  // 🎯 ورودی‌ها
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) name = '';
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;

  // 🔄 State داخلی برای تشخیص فوکوس
  @state() public _isFocused = false;

  // 🎨 استایل‌های Floating Label
  static styles = css`
    :host {
      display: block;
      font-family: inherit;
      direction: rtl;
      margin-bottom: 16px;
      --input-bg: #ffffff;
      --input-border: #d1d5db;
      --input-text: #111827;
      --input-focus: #3b82f6;
      --input-disabled-bg: #f3f4f6;
      --label-color: #6b7280;
      --label-active-color: #3b82f6;
    }

    .wrapper {
      position: relative;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 20px 12px 8px 12px; /* فضای بالا برای لیبل شناور */
      border: 1px solid var(--input-border);
      border-radius: 8px;
      font-size: 14px;
      background-color: var(--input-bg);
      color: var(--input-text);
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: var(--input-focus);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    input[readonly] {
      background-color: var(--input-disabled-bg);
      cursor: default;
    }

    input[disabled] {
      background-color: var(--input-disabled-bg);
      color: #9ca3af;
      cursor: not-allowed;
      opacity: 0.8;
    }

    /* 🏷️ لیبل شناور */
    label {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      color: var(--label-color);
      pointer-events: none; /* کلیک از لیبل عبور کند */
      transition: all 0.2s ease;
      background-color: transparent;
      padding: 0 4px;
    }

    /* وقتی فوکوس شده یا مقدار دارد، لیبل بالا می‌رود */
    input:focus + label,
    input:not(:placeholder-shown) + label {
      top: 8px;
      transform: translateY(0);
      font-size: 11px;
      color: var(--label-active-color);
      background-color: var(--input-bg);
    }

    /* حالت غیرفعال */
    input[disabled] + label {
      color: #9ca3af;
    }
  `;

  // 🖼️ رندر قالب
  render() {
    const inputId = `input-${this.name || Math.random().toString(36).slice(2)}`;

    return html`
      <div class="wrapper">
        <input
          id="${inputId}"
          type=${this.type}
          .value=${this.value}
          placeholder=" " /* فضای خالی برای فعال کردن :not(:placeholder-shown) */
          name=${this.name}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this._handleInput}
          @focus=${() => (this._isFocused = true)}
          @blur=${() => (this._isFocused = false)}
        />
        ${this.label ? html`<label for="${inputId}">${this.label}</label>` : ''}
      </div>
    `;
  }

  // ⚡ هندل کردن تغییرات
  private _handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input-change', {
        detail: { value: this.value, name: this.name },
        bubbles: true,
        composed: true
      })
    );
  }
}

// ثبت خودکار در مرورگر (اگر از @customElement استفاده نکنید، این خط لازم است)
// customElements.define('custom-input', CustomInput);