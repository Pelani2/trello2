// eslint-disable-next-line no-var
declare var require: NodeRequire;

interface NodeRequire {
  context: (directory: string, useSubdirectories?: boolean, regExp?: RegExp, mode?: string) => any;
};