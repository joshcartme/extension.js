export interface RunChromeExtensionInterface extends PluginOptions {
  manifestPath?: string
  extensionPath?: string
  pagesFolder?: string
}

export interface PluginOptions {
  port?: number
  browserFlags?: string[]
  userDataDir?: string
  startingUrl?: string
  autoReload?: boolean | 'background'
}
