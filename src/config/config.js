import { lazy } from 'react'
import locales from './locales'
import routes from './routes'
import getMenuItems from './menuItems'
import themes from './themes'
import parseLanguages from 'base-shell/lib/utils/locale'
import grants from './grants'


const config = {
  auth: {
    grants,
    redirectTo: '/dashboard',
    persistKey: 'base-shell:auth',
    signInURL: '/signin',
    signUpURL: '/signup',
  },
  routes,
  locale: {
    locales,
    defaultLocale: parseLanguages(['en', 'de', 'ru','hi'], 'en'),
    onError: (e) => {
      //console.warn(e)
      return 
    },
  },
  menu: {
    getMenuItems,
    MenuHeader: lazy(() =>
      import('material-ui-shell/lib/components/MenuHeader/MenuHeader')
    ),
  },
  theme: {
    themes,
    defaultThemeID: 'green',
    defaultType: 'light',
    defaultIsDarkMode: false,
    defaultIsRTL: false //change this to true for default Right to Left Language support
  },
  pages: {

    LandingPage: lazy(() => import('../pages/LandingPage')),
    PageNotFound: lazy(() => import('../pages/PageNotFound/PageNotFound')),
  },
}

export default config
