import React from 'react';

import * as bootstrap from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

const BreadcrumbInstance = (
  <Breadcrumb>
    <Breadcrumb.Item href="#">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Data
    </Breadcrumb.Item>
</Breadcrumb>
);
export default BreadcrumbInstance;
