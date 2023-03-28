import { Fragment, FC, ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

enum EButtonSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

enum EColorVariant {
  DEFAULT = "default",
  PRIMARY = "primary",
  ACCENT = "accent",
  SECONDARY = "secondary",
}

interface IOutlinedButtonProps {
  copy: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  appendChildren?: ReactNode;
  prependChildren?: ReactNode;
  size?: EButtonSize | string;
  colorVariant?: EColorVariant | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const OutlinedButton: FC<IOutlinedButtonProps> = ({
  copy,
  onClick,
  type = "button",
  className = "",
  appendChildren,
  prependChildren,
  size = EButtonSize.MEDIUM,
  colorVariant = EColorVariant.DEFAULT,
}) => {
  const buttonClassNames = {
    "outlined-btn--accent": colorVariant === EColorVariant.ACCENT,
    "outlined-btn--primary": colorVariant === EColorVariant.PRIMARY,
    "outlined-btn--default": colorVariant === EColorVariant.DEFAULT,
    "outlined-btn--secondary": colorVariant === EColorVariant.SECONDARY,
    "outlined-btn--sm": size === EButtonSize.SMALL,
    "outlined-btn--lg": size === EButtonSize.LARGE,
  };

  return (
    <Fragment>
      <button
        type={type}
        className={clsx("outlined-btn", buttonClassNames, className)}
        onClick={onClick && onClick}
      >
        <div className="outlined-btn__body">
          {!!prependChildren && prependChildren}

          <span className="outlined-btn__copy">{copy}</span>

          {!!appendChildren && appendChildren}
        </div>
      </button>
    </Fragment>
  );
};

export { OutlinedButton as default };
