import { createVuetify } from "vuetify/lib/framework.mjs";

import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      
      },
})