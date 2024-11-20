import {defineCliConfig} from 'sanity/cli'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineCliConfig({
  api: {
    projectId: 'td08n1oq',
    dataset: 'production'
  },
  plugins: [unsplashImageAsset()],
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
