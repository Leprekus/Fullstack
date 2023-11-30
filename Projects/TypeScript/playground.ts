const obj = {
    foo: 'bar' as const,
    hello: 'world' as const,
  }
  
  function get<T, K extends keyof T>(obj: T, path: K): T[K] {
    return obj[path]
  }
  
  const val = get(obj, 'foo')
  obj.foo

  console.log('hello world')