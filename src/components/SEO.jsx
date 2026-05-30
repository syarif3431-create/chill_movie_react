import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image }) => {
    const defaultImage = "/bnet.png";
    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:title" content={`${title} | Chill Movie`} />
            <meta property="og:description" content={description} /> 
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content="Chill Movie" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={window.location.href} />
            <meta property="twitter:title" content={`${title} | Chill Movie`} />
            <meta property="twitter:description" content={description} /> 
            <meta property="twitter:image" content={image || defaultImage} />
            <title>{title} | Chill Movie </title>
        </Helmet>
    );
};

export default SEO;