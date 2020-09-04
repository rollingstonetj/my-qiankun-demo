import { loadMicroApp } from 'qiankun'

const globalCommonLoadApps = {
  common: {
    name: 'common',
    entry: '//localhost:8083',
    container: '#common'
  }
}

export function loadCommonApp (appName, config) {
  if (!globalCommonLoadApps[appName]) {
    return false
  }
  const appConfig = globalCommonLoadApps[appName]
  console.log({
    ...appConfig,
    ...config
  }, 'common')
  return loadMicroApp({
    ...appConfig,
    ...config
  })
}
