import React from 'react';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';

interface IIcons {
  name?: string;
  children?: any;
}

const Icon = (props: IIcons) => {
  switch (props.name) {
    case 'search':
      return <HomeIcon />;
    case 'home':
      return <HomeIcon />;
    case 'favorites':
      return <HomeIcon />;
    default:
      return <></>;
  }
};

export default Icon;
