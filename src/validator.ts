import {Config, ConfigAuthAPI, ConfigAuthFTP } from 'types'
import Logger from './logger'

type Keys = Partial<ConfigAuthAPI | ConfigAuthFTP>

export default class Validator {
  private config: Config

  constructor(config: Config) {
    this.config = config
  }

  auth() {
    try {
      Logger.info(`VALIDANDO CONFIGURAÇÕES DE ${Logger.bold('AUTENTICAÇÃO DE API')}.`)
      if (!this.valid(this.config.auth.api)) {
        throw new Error()
      }
    } catch {
      Logger.error('CONFIGURAÇÕES INVÁLIDAS.')
      process.exit(1)
    }
    try {
      Logger.info(`VALIDANDO CONFIGURAÇÕES DE ${Logger.bold('AUTENTICAÇÃO DE FTP')}.`)
      if (!this.valid(this.config.auth.ftp)) {
        throw new Error()
      }
    } catch {
      Logger.warning('CONFIGURAÇÕES INVÁLIDAS.')
    }
  }

  database() {
    try {
      Logger.info(`VALIDANDO CONFIGURAÇÕES DE ${Logger.bold('BANCO DE DADOS')}.`)
    } catch {
      Logger.error('CONFIGURAÇÕES INVÁLIDAS.')
      process.exit(1)
    }
  }

  valid(config: ConfigAuthAPI | ConfigAuthFTP): boolean {
    const valid = Object.keys(config).reduce((carrier, key) => {
      if (!config[key as keyof Keys]) {
        return ++carrier
      }
      return carrier
    }, 0)
    return !valid
  }
}
