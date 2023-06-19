import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  disabled,
  ...otherProps
}) => {
  console.log('otherProps:', otherProps);
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
