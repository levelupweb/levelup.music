import React from 'react';
import { Helmet } from "react-helmet";
import NoMatch from "../../components/noMatch";
import "./styles.css"

export default () => (
	<section className="fullpage center first notFound inverted">
		<Helmet>
      <title>404 Not Found</title>
      <meta name="description" content="404 Levelup Music Page" />
  		<meta name="keywords" content="Levelup Music, 404" />
  	</Helmet>
		<NoMatch />
	</section>
)