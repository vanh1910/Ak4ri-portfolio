

declare module 'react-toggle-dark-mode' {
  import * as React from 'react';

  export interface DarkModeSwitchProps {
    /** Trạng thái hiện tại: true là mặt trăng, false là mặt trời */
    checked: boolean;
    /** Hàm chạy khi click vào nút */
    onChange: (checked: boolean) => void;
    /** Kích thước của icon (mặc định: 24) */
    size?: number | string;
    /** Màu của mặt trăng */
    moonColor?: string;
    /** Màu của mặt trời */
    sunColor?: string;
    /** Tuỳ biến CSS cho wrapper */
    style?: React.CSSProperties;
  }

  export const DarkModeSwitch: React.FC<DarkModeSwitchProps>;
}