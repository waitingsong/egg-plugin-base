/* eslint-disable node/no-unpublished-import */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Application } from 'egg'

import { bindOnAppOrAgent, registerMiddleware } from './lib/bind'
import { pluginName } from './lib/config'
import { parseConfig } from './lib/util'


/* istanbul ignore next */
export default (app: Application): void => {
  const config = parseConfig(app.config[pluginName])

  app.config[pluginName].appWork = !! config.appWork
  app.config[pluginName].enable = !! config.enable

  /* istanbul ignore else */
  if (config.appWork) {
    bindOnAppOrAgent(app)
  }

  /* istanbul ignore else */
  if (config.enable) {
    registerMiddleware(app)
  }
}

