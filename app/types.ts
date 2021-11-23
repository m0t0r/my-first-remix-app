import type {LoaderFunction} from 'remix'

type LoaderWithParams<Params extends Record<string, unknown> = Record<string, unknown>> = (
  args: Omit<Parameters<LoaderFunction>['0'], 'params'> & {params: Params}
) => ReturnType<LoaderFunction>

export type {LoaderWithParams}
