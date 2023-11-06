import { ConfigCatProvider } from 'configcat-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import router from '@configs/router';

const configcatKey = import.meta.env.VITE_CONFIGCAT_SDK_KEY;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ConfigCatProvider sdkKey={configcatKey}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ConfigCatProvider>,
);
