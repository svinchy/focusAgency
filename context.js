import state from './state.js'
import dependencies from './dependencies.js'
import * as components from './components/index.js'
import * as functions from './functions/index.js'
import pages from './pages/index.js'
import designSystem from './designSystem/index.js'
import config from './config.js'

export default {
  state,
  dependencies,
  components,
  functions,
  pages,
  designSystem,
  ...config
}
