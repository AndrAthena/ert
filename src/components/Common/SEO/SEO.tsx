import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: FC<SEOProps> = ({ title = '', description = '' }) => (
  <Helmet>
    <title>ERT {title && `| ${title}`}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
