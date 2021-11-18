const env = (key: string): string | boolean | undefined => {
  return process.env[key];
};

export default (appd: any) => {
  const params = [
    "APPD_CONTROLLER_HOST_NAME",
    "APPD_CONTROLLER_PORT",
    "APPD_CONTROLLER_SSL_ENABLED",
    "APPD_ACCOUNT_NAME",
    "APPD_ACCOUNT_ACCESS_KEY",
    "APPD_APPLICATION_NAME",
    "APPD_TIER_NAME",
    "APPD_NODE_NAME",
  ];

  for (const param of params) {
    if (!env(param)) {
      throw new Error(`App Dynamics ${param} Parameter missing.`);
    }
  }

  const config: any = {
    controllerHostName: env('APPD_CONTROLLER_HOST_NAME'),
    controllerPort: env('APPD_CONTROLLER_PORT'),
    controllerSslEnabled: env('APPD_CONTROLLER_SSL_ENABLED'),
    accountName: env('APPD_ACCOUNT_NAME'),
    accountAccessKey: env('APPD_ACCOUNT_ACCESS_KEY'),
    applicationName: env('APPD_APPLICATION_NAME'),
    tierName: env('APPD_TIER_NAME'),
    nodeName: env('APPD_NODE_NAME'),
    debug: true,
  };

  appd.profile(config);

  return appd;
};
