import { Fragment, FC } from 'react';
import { ErrorMessage } from 'formik';

// INTERFACES
import { IComponent } from '@/interfaces';

const ErrorMsg: FC<IComponent.IErrorMsgProps> = ({ name }) => {
  return (
    <Fragment>
      <ErrorMessage name={name}>
        {(msg) => (
          <div className="animate__animated animate__shakeX error-msg">
            {msg}
          </div>
        )}
      </ErrorMessage>
    </Fragment>
  );
};

export { ErrorMsg as default };