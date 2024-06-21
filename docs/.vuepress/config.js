import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

module.exports = {
  lang: 'en-US',
  title: 'Course PCB Design - Professional Bachelor Electronics-ICT',
  description: 'Course PCB Design',
  
  theme: defaultTheme({
    logo: '/files/afbeelding1.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Organization', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' }
    ],
    sidebar: [
      {
        text: 'Information',
        collapsible: true,
        children: [
          '/11_introduction/README.md',
          '/12_electrical_diagram/README.md',
          '/13_pcb/README.md',
          '/14_components/README.md',
          '/15_pcb_trace/README.md'          
        ]
      },
      {
        text: 'Design',
        collapsible: true,
        children: [
          '/21_electrical_diagram_design/README.md',
          '/22_custom_component_library/README.md',
          '/23_pcb_design/README.md'          
        ]
      },
      {
        text: 'Production',
        collapsible: true,
        children: [
          '/31_ordering/README.md',
          '/32_assembly/README.md',
          '/33_testing/README.md'          
        ]
      }
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/pcb_design',
    docsDir: 'docs',
    docsBranch: 'master',
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}