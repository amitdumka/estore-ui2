import React from 'react'
import {
  AccountBox as AccountBoxIcon,
  ChatBubble,
  ChromeReaderMode,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  FilterList,
  FormatTextdirectionRToL as RTLIcon,
  FormatTextdirectionLToR as LTRIcon,
  GetApp,
  InfoOutlined,
  Language as LanguageIcon,
  Lock as LockIcon,
  MenuOpen as MenuOpenIcon,
  QuestionAnswer,
  SettingsApplications as SettingsIcon,
  Style as StyleIcon,
  Tab,
  ViewList,
  Web,
  Assignment,
  Business,
  People,
  Security,
  Slideshow,
  CallToAction,
  Whatshot,
  Chat,Home as HomeIcon,
} from '@material-ui/icons'

import allLocales from './locales'
import allThemes from './themes'

const getMenuItems = (props) => {
  const {
    intl,
    updateLocale,
    locale,
    menuContext,
    themeContext,
    a2HSContext,
    auth: authData,
  } = props

  const { toggleThis, isDesktop, isAuthMenuOpen, isMiniSwitchVisibility } = menuContext
  const { themeID, setThemeID, isRTL, toggleThisTheme } = themeContext

  const { auth, setAuth } = authData
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext

  const localeItems = allLocales.map((l) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
      },
      leftIcon: <LanguageIcon />,
    }
  })

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  if (isAuthMenuOpen || !isAuthorised) {
    return [
      {
        value: '/my_account',
        primaryText: intl.formatMessage({
          id: 'my_account',
          defaultMessage: 'My Account',
        }),
        leftIcon: <AccountBoxIcon />,
      },
      {
        value: '/signin',
        onClick: isAuthorised
          ? () => {
              setAuth({ isAuthenticated: false })
            }
          : () => {},
        visible: true,
        primaryText: isAuthorised
          ? intl.formatMessage({ id: 'sign_out' })
          : intl.formatMessage({ id: 'sign_in' }),
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ]
  }
  return [
    
    {
      value: '/home',
      visible: isAuthorised,
      primaryText: intl.formatMessage({ id: 'home' }),
      leftIcon: <HomeIcon />,
    },
    {
      value: '/dashboard',
      visible: isAuthorised,
      primaryText: intl.formatMessage({
        id: 'dashboard',
        defaultMessage: 'Dashboard',
      }),
      leftIcon: <DashboardIcon />,
    },
    {
      value: '/dashboardM',
      visible: isAuthorised,
      primaryText: intl.formatMessage({id: 'dasboard2', defaultMessage: 'Daashboard Alternate',}),
      leftIcon: <DashboardIcon />,
    },
    {
      value: '/chats',
      visible: isAuthorised,
      primaryText: intl.formatMessage({ id: 'chats', defaultMessage: 'Chats' }),
      leftIcon: <Chat />,
    },
    {
      value: '/chats',
      visible: isAuthorised,
      primaryText: intl.formatMessage({ id: 'tailoring', defaultMessage: 'Tailoring' }),
      leftIcon: <Chat />,
    },
    {
      primaryText: intl.formatMessage({
        id: 'accounting',
        defaultMessage: 'Accounting',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Slideshow />,
      nestedItems: [
        // {
        //   value: '/admin',
        //   visible: !isAdmin,
        //   primaryText: intl.formatMessage({
        //     id: 'admin',
        //     defaultMessage: 'Admin',
        //   }),
        //   leftIcon: <Security />,
        // },
        {
          value: '/companies',
          //visible: isGranted(auth, 'read_companies'),
          primaryText: intl.formatMessage({
            id: 'companies',
            defaultMessage: 'Companies',
          }),
          leftIcon: <Business />,
        },
        {
          value: '/tasks',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'tasks',
            defaultMessage: 'Tasks',
          }),
          leftIcon: <Assignment />,
        },
        {
          value: '/posts',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'posts',
            defaultMessage: 'Posts',
          }),
          leftIcon: <CallToAction />,
        },
      ],
    },

    {
      primaryText: intl.formatMessage({ id: 'payroll', defaultMessage: 'Payroll' }),
      primaryTogglesNestedList: true,
      leftIcon: <Web />,
      nestedItems: [
        {
          value: '/dialog_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'dialog_demo',
            defaultMessage: 'Dialog',
          }),
          leftIcon: <ChatBubble />,
        },
        {
          value: '/toast_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'toast_demo',
            defaultMessage: 'Toast',
          }),
          leftIcon: <QuestionAnswer />,
        },
        {
          value: '/filter_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'filter_demo',
            defaultMessage: 'Filter',
          }),
          leftIcon: <FilterList />,
        },
        {
          value: '/list_page_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'list_page_demo_menu',
            defaultMessage: 'List Page',
          }),
          leftIcon: <ViewList />,
        },
        {
          value: '/tabs_demo',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'tabs_demo',
            defaultMessage: 'Tabs Page',
          }),
          leftIcon: <Tab />,
        },
      ],
    },

    {
      primaryText: intl.formatMessage({
        id: 'banking',
        defaultMessage: 'Banking',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Assignment />,
      nestedItems: [
        {
          value: '/docu/getting_started',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'getting_started',
            defaultMessage: 'Getting started',
          }),
          leftIcon: <Assignment />,
        },
      ],
    },

    {
      primaryText: intl.formatMessage({
        id: 'expense',
        defaultMessage: 'Cash In/Out',
      }),
      visible: isAuthorised,
      primaryTogglesNestedList: true,
      leftIcon: <Whatshot />,
      nestedItems: [
        {
          value: '/firebase_paths',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_paths',
            defaultMessage: 'Paths',
          }),
          leftIcon: <Whatshot />,
        },
        {
          value: '/firebase_lists',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_lists',
            defaultMessage: 'Lists',
          }),
          leftIcon: <Whatshot />,
        },
        {
          value: '/firebase_docs',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_docs',
            defaultMessage: 'Docs',
          }),
          leftIcon: <Whatshot />,
        },
        {
          value: '/firebase_cols',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_cols',
            defaultMessage: 'Cols',
          }),
          leftIcon: <Whatshot />,
        },
        {
          value: '/firebase_messaging',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_messaging',
            defaultMessage: 'Messaging',
          }),
          leftIcon: <Whatshot />,
        },
        {
          value: '/firebase_storage',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'firebase_storage',
            defaultMessage: 'Storage',
          }),
          leftIcon: <Whatshot />,
        },
      ],
    },

    {
      primaryText: intl.formatMessage({
        id: 'administration',
        defaultMessage: 'Administration',
      }),
      primaryTogglesNestedList: true,
      //visible: isAdmin,
      leftIcon: <Security />,
      nestedItems: [
        {
          value: '/users',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'users',
            defaultMessage: 'Users',
          }),
          leftIcon: <People />,
        },
        {
          value: '/roles',
          visible: isAuthorised,
          primaryText: intl.formatMessage({
            id: 'roles',
            defaultMessage: 'Roles',
          }),
          leftIcon: <AccountBoxIcon />,
        },
      ],
    },
    { divider: true },
    {
      value: '/about',
      visible: true,
      primaryText: intl.formatMessage({ id: 'about' }),
      leftIcon: <InfoOutlined />,
    },
    {
      value: '/stores/customers', 
      visible: true,
      primaryText: intl.formatMessage({id: 'customers', defaultMessage: 'Customers'}), 
      leftIcon: <InfoOutlined />,
   },
    {
       value: '/stores', 
       visible: true,
       primaryText: intl.formatMessage({id: 'stores', defaultMessage: 'Stores'}), 
       leftIcon: <InfoOutlined />,
    },
    { divider: true },
    {
      primaryText: intl.formatMessage({ id: 'settings' }),
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          primaryText: intl.formatMessage({ id: 'theme' }),
          secondaryText: intl.formatMessage({ id: themeID }),
          primaryTogglesNestedList: true,
          leftIcon: <StyleIcon />,
          nestedItems: themeItems,
        },
        {
          primaryText: intl.formatMessage({ id: 'language' }),
          secondaryText: intl.formatMessage({ id: locale }),
          primaryTogglesNestedList: true,
          leftIcon: <LanguageIcon />,
          nestedItems: localeItems,
        },
        {
          visible: isDesktop ? true : false,
          onClick: () => {toggleThis('isMiniSwitchVisibility')},
          primaryText: intl.formatMessage({
            id: 'menu_mini_mode',
          }),
          leftIcon: isMiniSwitchVisibility ? (
            <MenuOpenIcon />
          ) : (
            <ChromeReaderMode />
          ),
        },
        {
          onClick: () => {toggleThisTheme('isRTL')},
          primaryText: `${isRTL ? 'LTR' : 'RTL'} mode`,
          leftIcon: isRTL ? <LTRIcon /> : <RTLIcon />,
        },
      ],
    },
    {
      value: null,
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt()
      },
      primaryText: intl.formatMessage({
        id: 'install',
        defaultMessage: 'Install',
      }),
      leftIcon: <GetApp />,
    },
  ]
}
export default getMenuItems
