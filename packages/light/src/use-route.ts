import AWSServerlessMicro from 'aws-serverless-micro';
import { run } from 'micro';

import { IM, SR, AP } from './types/http';

type Middleware = (req: IM, res: SR) => any;
type Plugin = (fn: (req: IM, res: SR) => any) => (req: IM, res: SR) => any;

const { LIGHT_ENV } = process.env;

export default (name: string): any => {
  if (!name) throw new Error('route must have a unique name');
  const _name = name;
  const _middleware: Middleware[] = [];
  const _plugins: Plugin[] = [];

  return {
    withHandler(fn: (req: IM, res: SR) => any): (req: IM, res: SR, opts: any) => AP {
      if (!fn) throw new Error('please provide a function to withHandler');

      // get default if using import/export syntax
      let func: any = fn;
      if (func.default) {
        func = func.default;
      }

      // apply middleware to the route
      let wrappedFunction = async (req: IM, res: SR): AP => { // TODO: opts
        for (const mw of _middleware) { // eslint-disable-line
          await mw(req, res); // eslint-disable-line

          if (res.headersSent) {
            return null;
          }
        }

        return func(req, res);
      };

      // apply plugins to the route
      const plugins = [
        ..._plugins,
      ].filter((x: any): any => x);
      wrappedFunction = plugins
        .reverse()
        .reduce((acc: any, val: any): any => val(acc), wrappedFunction);

      // set the name for cli
      (wrappedFunction as any)._name = _name;

      // detect if serverless environment
      const { env } = process;
      const isNetlify = LIGHT_ENV === 'netlify' || env.LIGHT_ENV === 'netlify';
      const isAWS = LIGHT_ENV === 'aws' || env.LIGHT_ENV === 'aws';
      const isRunKit = LIGHT_ENV === 'runkit' || env.LIGHT_ENV === 'runkit';
      const isNow = LIGHT_ENV === 'now' || env.LIGHT_ENV === 'now';

      const isServerless = isNetlify || isAWS || isRunKit || isNow;

      // transform exports
      let handler: any = wrappedFunction;
      if (isServerless) {
        if (isRunKit || isNow) {
          // TODO: test this in runkit and now tests
          /* istanbul ignore next */
          handler = async (req: IM, res: SR): AP => run(req, res, (wrappedFunction as any));
        }
        if (isNetlify || isAWS) {
          handler = {
            handler: AWSServerlessMicro(wrappedFunction),
          };
        }
        if (isRunKit) {
          handler = {
            endpoint: handler,
          };
        }
      }

      return handler;
    },
    addMiddleware(...fns: Middleware[]): void {
      _middleware.push(...fns.filter((x: any): any => x));
    },
    addPlugin(...fns: Plugin[]): void {
      _plugins.push(...fns.filter((x: any): any => x));
    },
  };
};
