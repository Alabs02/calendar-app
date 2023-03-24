import React, { PropsWithChildren, MouseEventHandler } from "react";

interface IProps extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: IProps): JSX.Element {
  const { onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
}

export default Button;
