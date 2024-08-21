import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import ProfileGrid from '@/components/index/ProfileGrid';
import { SITE } from '@/constants/metadata';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ProfileGrid />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>{SITE.title}</title>;
