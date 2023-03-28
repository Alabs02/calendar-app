import { Fragment, FC } from 'react';
import clsx from 'clsx';

// UTIL
import { truncate } from '@/utils/helpers';

// TODO: Move enum and interface to the interface and enums folders respectively
enum EColorVariant {
  ACCENT = 'accent',
  PRIMARY = 'primary',
  // RED = 'red',
  // GREEN = 'green',
  // INDIGO = 'indigo',
  // SECONDARY = 'secondary'
}

interface IBadgeProps {
  text: string;
  className?: string;
  colorVariant?: EColorVariant | string;
}

const Badge: FC<IBadgeProps> = ({ text, className = '', colorVariant = EColorVariant.PRIMARY }) => {
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