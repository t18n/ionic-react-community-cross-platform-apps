import './index.min.css';

import React from 'react';

type Props = {
  height?: string;
  width?: string;
  radius?: string;
  rounded?: boolean;
  noAnimated?: boolean;
};

const SkeletonElement: React.FC<Props> = (props) => {
  let styles: any = {};

  styles = {
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
  };

  if (props.rounded) {
    styles.borderRadius = '999em';
  }

  return (
    <div className={props.noAnimated ? 'skeleton-element no-animated' : 'skeleton-element'}>
      <div style={styles} />
    </div>
  );
};

export default SkeletonElement;
