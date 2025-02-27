import React from 'react';

import Error from '@/components/common/Error';
import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import * as styles from '@/styles/pages.css';

const ServerErrorPage = () => {
  return (
    <Layout className={styles.centered}>
      <Error title="Server Error" />
    </Layout>
  );
};

export default ServerErrorPage;

export const Head = () => <SEO title="Server Error" />;
