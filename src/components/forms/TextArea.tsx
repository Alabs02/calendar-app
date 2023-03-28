import { Fragment } from 'react';

const TextArea = (props: any | unknown) => {
  return (
    <Fragment>
      <textarea className="textarea is-smalls is-info" {...props}></textarea>
    </Fragment>
  );
}

export { TextArea as default };