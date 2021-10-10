import React, { FC } from 'react';

interface Props {
  title?: string;
}

const CustomPill: FC<Props> = ({ title = "My Title" }) => {
  return (
      <div>{title}</div>
  )
}

export default CustomPill;
