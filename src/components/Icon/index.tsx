import React from 'react';

interface Props {
  href: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ href, className = '' }) => {
  return (
    <svg className={className}>
      <use xlinkHref={href} />
    </svg>
  );
};

export default Icon;
