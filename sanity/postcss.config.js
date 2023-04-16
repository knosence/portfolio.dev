/* postcss.config.js */
import { join } from 'path'

export const plugins = {
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
  autoprefixer: {},
}
