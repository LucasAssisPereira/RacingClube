const getEnv = (key: string, defaultValue?: string):string => {
  const val = process.env[key] || defaultValue
  if (val === undefined){
    throw new Error(`Environment variable ${key} is not set`)
  }
  
  return val
}

export const CLIENT_URL = getEnv('CLIENT_URL')
export const PORT = getEnv('HTTP_PORT', '8080')
export const NODE_ENV = getEnv('NODE_ENV', 'development')

