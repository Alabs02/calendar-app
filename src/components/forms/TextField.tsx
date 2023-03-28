import { Fragment } from 'react'

const TextField = (props: any | unknown) => {
  return (
    <Fragment>
      <input className="input is-info" {...props}></input>
    </Fragment>
  );
}

export { TextField as default }; 