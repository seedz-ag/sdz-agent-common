declare class ProgressBar {
    private progress;
    private list;
    constructor();
    create(n: string, total: number, init: number, options: any): any;
    get(n: string): SingleBar;
    update(n: string, total: number, options: any): void;
    close(): void;
}
declare const _default: ProgressBar;
export default _default;
