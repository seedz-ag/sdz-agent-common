declare class Logger {
    private type;
    bold(text: any): string;
    error(...args: any[]): void;
    info(...args: any[]): void;
    log(...args: any[]): void;
    do(...args: any[]): void;
    warning(...args: any[]): void;
}
declare const _default: Logger;
export default _default;
