import React, { useState } from "react";

import { isFunction } from "lodash/fp";

const ToggledComponent = ({
  initialValue,
  OnComponent,
  OffComponent,
  onClick,
}) => {
  const [toggle, setToggle] = useState(initialValue);
  const _setToggle = () => {
    setToggle(!toggle);
    if (isFunction(onClick)) {
      onClick(!toggle);
    }
  };

  const Component = toggle ? OnComponent : OffComponent;
  return <Component onClick={_setToggle} />;
};

export default ToggledComponent;