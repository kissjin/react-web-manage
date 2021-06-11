import React from 'react';
import { useIntl } from 'umi';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';

import { RoutesDataItem } from '@/utils/routes';

import BreadCrumbs from '@/components/BreadCrumbs';
import ALink from '@/components/ALink';

import styles from '../style.less';

export interface RightTopProps {
  collapsed?: boolean;
  topNavEnable?: boolean;
  belongTopMenu?: string;
  toggleCollapsed?: () => void;
  breadCrumbs?: RoutesDataItem[];
  menuData?: RoutesDataItem[];
}

const RightTop: React.FC<RightTopProps> = ({
  collapsed = false,
  topNavEnable = true,
  belongTopMenu = '',
  toggleCollapsed,
  breadCrumbs = [],
  menuData = [],
}) => {
  const { formatMessage } = useIntl();

  return (
    <div
      id={styles['indexlayout-right-muse']}
      className={!topNavEnable ? styles.topNavEnable : ''}
    >
      <div className={styles['indexlayout-right-top-top']}>
        <div className={styles['indexlayout-top-menu']}>
          <Scrollbars
            autoHide
            renderThumbHorizontal={(props: any) => (
              <div {...props} className={styles['scrollbar-thumb']} />
            )}
            renderThumbVertical={(props: any) => (
              <div {...props} className={styles['scrollbar-thumb']} />
            )}
          >
            {topNavEnable ? (
              menuData.map(item => {
                if (item.hidden) {
                  return null;
                }

                let className = `${styles['indexlayout-top-menu-li']}`;
                if (belongTopMenu === item.path) {
                  className = `${styles['indexlayout-top-menu-li']} ${styles.active}`;
                }

                return (
                  <ALink to={item.path} className={className} key={item.path}>
                    {formatMessage({ id: item.title })}
                  </ALink>
                );
              })
            ) :''}
          </Scrollbars>
        </div>
      </div>

      {topNavEnable ? (
        breadCrumbs.map(item=>{
         return <div key={item.path} className={styles['indexlayout-right-top-bot']}>{item.title }</div>
        })
      ) :""}
    </div>
  );
};

export default RightTop;
