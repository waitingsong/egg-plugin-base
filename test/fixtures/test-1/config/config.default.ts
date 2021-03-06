/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line node/no-unpublished-import
import { JwtEggConfig } from '../../../../dist/index'


export const keys = '123456'

export const jwt: JwtEggConfig = {
  enable: true,
  client: {
    debug: false,
  },
  // rule https://github.com/eggjs/egg-path-matching
  ignore: ['/ping', '/swagger-u*'],
}

