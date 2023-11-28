import {PageContainer} from '@ant-design/pro-components';
import {Alert, Card, Typography} from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({children}) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'登录成功'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <h1>欢迎使用后台管理系统</h1>
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
export default Welcome;
