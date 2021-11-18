const env = (key: string): string | boolean | undefined => {
  return process.env[key];
};

export default (appd: any) => {
  const params = [
    env("APPD_CONTROLLER_HOST_NAME"),
    env("APPD_CONTROLLER_PORT"),
    env("APPD_CONTROLLER_SSL_ENABLED"),
    env("APPD_ACCOUNT_NAME"),
    env("APPD_ACCOUNT_ACCESS_KEY"),
    env("APPD_APPLICATION_NAME"),
    env("APPD_TIER_NAME"),
    env("APPD_NODE_NAME"),
  ];

  if (params.filter(e => !e).length) {
    throw new Error('APPD Parameter missing.');
  }

  const [
    APPD_CONTROLLER_HOST_NAME,
    APPD_CONTROLLER_PORT,
    APPD_CONTROLLER_SSL_ENABLED,
    APPD_ACCOUNT_NAME,
    APPD_ACCOUNT_ACCESS_KEY,
    APPD_APPLICATION_NAME,
    APPD_TIER_NAME,
    APPD_NODE_NAME,
  ] = params;

  const config: any = {
    controllerHostName: APPD_CONTROLLER_HOST_NAME,
    controllerPort: APPD_CONTROLLER_PORT,
    controllerSslEnabled: APPD_CONTROLLER_SSL_ENABLED,
    accountName: APPD_ACCOUNT_NAME,
    accountAccessKey: APPD_ACCOUNT_ACCESS_KEY,
    applicationName: APPD_APPLICATION_NAME,
    tierName: APPD_TIER_NAME,
    nodeName: APPD_NODE_NAME,
    debug: true,
  };

  appd.profile(config);

  return appd;
};
