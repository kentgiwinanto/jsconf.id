import React from 'react';

import DefaultLayout from '../components/layout/DefaultLayout';
import Page from '../components/layout/Page';
import PageTitle from '../components/ui/PageTitle';

const NotFoundPage = () => (
  <DefaultLayout>
    <Page layout="page">
      <PageTitle title="Page Not Found" />
      <p>
        <code>res.status(404).send(&apos;Cannot find this page.&apos;)</code>
      </p>
    </Page>
  </DefaultLayout>
);

export default NotFoundPage;
