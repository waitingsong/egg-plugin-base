/* eslint-disable import/no-extraneous-dependencies */
import assert from 'assert'

import { Context } from 'egg'

import { JwtMsg } from '../../lib/config'
import {
  EggMiddleware,
  JwtEggConfig,
  ClientOptions,
} from '../../lib/types'
import { parseOptions } from '../../lib/util'


export default middlewareFactory

function middlewareFactory(config: JwtEggConfig): EggMiddleware {
  const opts = parseOptions(config.client) // defined out of mw()!
  const mw = (
    ctx: Context,
    next: () => Promise<void>,
  ) => foo(ctx, next, opts)

  return mw
}

async function foo(
  ctx: Context,
  next: () => Promise<void>,
  options: ClientOptions,
): Promise<void> {

  assert(ctx)
  assert(options, JwtMsg.AuthFailed)

  return next()
}

