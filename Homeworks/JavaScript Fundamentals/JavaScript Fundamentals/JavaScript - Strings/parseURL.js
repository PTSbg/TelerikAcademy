function solve(args) {
  let protocolSeparator = '://';
  let serverSeparator = '/';
  let parse = args[0] + '';
  let index = 0;
  let len = protocolSeparator.length;

  let protocol = '';
  let server = '';
  let resource = '';


  index = parse.indexOf(protocolSeparator);
  protocol = parse.substr(0, index);

  len = index + len;
  index = parse.indexOf(serverSeparator, len);

  server = parse.substr(len, index - len);
  resource = parse.substr(index);

  console.log('protocol: ' + protocol);
  console.log('server: ' + server);
  console.log('resource: ' + resource);
}