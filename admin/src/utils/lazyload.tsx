/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-08-23 21:45:32
 * @LastEditTime: 2022-08-24 00:37:03
 */
import React from 'react';
import loadable from '@loadable/component';
import { Spin } from '@arco-design/web-react';
import styles from '@/layout/style/layout.module.less';

// https://github.com/gregberge/loadable-components/pull/226
function load(fn, options) {
  const Component = loadable(fn, options);

  Component.preload = fn.requireAsync || fn;

  return Component;
}

function LoadingComponent(props) {
  if (props.error) {
    console.error(props.error);
    return null;
  }
  return (
    <div className={styles.spin}>
      <Spin />
    </div>
  );
}

export default (loader) =>
  load(loader, {
    fallback: LoadingComponent({
      pastDelay: true,
      error: false,
      timedOut: false,
    }),
  });
