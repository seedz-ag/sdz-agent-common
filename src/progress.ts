import cliProgress, { SingleBar } from "cli-progress";

class ProgressBar {
  private progress;
  private list: Partial<{ [key: string]: SingleBar }> = {};
  constructor() {
    this.progress = new cliProgress.MultiBar(
      {
        clearOnComplete: false,
        stopOnComplete: true,
        hideCursor: true,
        format: `[{color}{bar}\u001b[0m] | {event} {text} || {percentage}% || {value}/{total} {unit} `,
      },

      cliProgress.Presets.shades_grey
    );
  }

  create(n: string, total: number, init: number, options: any) {
    const instenceProgress = this.progress.create(total, init, options);
    this.list[n] = instenceProgress;
    return instenceProgress;
  }

  get(n: string) {
    return this.list[n];
  }

  update(n: string, total: number, options: any) {
    const instance = this.get(n);
    if (instance) {
      instance.update(total, options);
    }
  }
}

export default new ProgressBar();
