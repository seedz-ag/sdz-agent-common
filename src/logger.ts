import chalk from 'chalk'

import now from './datetime'

const bold = chalk.bold
const error = chalk.red
const info = chalk.green
const warning = chalk.yellow

class Logger {
  private type: string = 'log'

  bold(text: any) {
    return bold(text)
  }

  error(...args: any[]) {
    this.type = 'error'
    this.do.apply(this, args)
  }

  info(...args: any[]) {
    this.type = 'info'
    this.do.apply(this, args)
  }

  log(...args: any[]) {
    this.type = 'log'
    this.do.apply(this, args)
  }

  do(...args: any[]) {
    let formatter
    switch (this.type) {
      case 'error': formatter = error
        break;
      case 'info': formatter = info 
        break;
      case 'warning': formatter = warning
        break;
      default: formatter = (text: string) => text
    }
    const prefix = formatter(`${bold(this.type.toUpperCase().padEnd(7, ' '))} [${now()}]:`)
    console.log.apply(console, [prefix, ...args])
  }

  warning(...args: any[]) {
    this.type = 'warning'
    this.do.apply(this, args)
  }
}

export default new Logger
