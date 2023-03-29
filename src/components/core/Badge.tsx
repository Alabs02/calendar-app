import { Fragment, FC } from 'react';
import clsx from 'clsx';

// INTERFACES
import { EColorVariant } from '@/enums';
import { IComponent } from '@/interfaces';


const Badge: FC<IComponent.IBadgeProps> = ({ text, className = '', colorVariant = EColorVariant.PRIMARY }) => {
  const badgeClassNames = {
    'badge--accent': colorVariant === EColorVariant.ACCENT,
    'badge--primary': colorVariant === EColorVariant.PRIMARY,
  };

  return (
    <Fragment>
      <div title={text} className={clsx("badge", badgeClassNames, className)}>
        <span>{text}</span>
      </div>
    </Fragment>
  );
}

export { Badge as default };