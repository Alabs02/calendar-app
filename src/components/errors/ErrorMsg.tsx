import { Fragment, FC } from 'react';
import { ErrorMessage } from 'formik';

interface IErrorMsgProps {
  name: string
}

const ErrorMsg: FC<IErrorMsgProps> = ({ name }) => {
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