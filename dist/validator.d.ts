import { Config, ConfigAuthAPI, ConfigAuthFTP } from "sdz-agent-types";
export default class Validator {
    private config;
    constructor(config: Config);
    auth(): void;
    database(): void;
    valid(config: ConfigAuthAPI | ConfigAuthFTP): boolean;
}
