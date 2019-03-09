export default {
  //
  isIdle: null,
  language: false,
  isLoaded: false,
  accountName:null,
  profilePicture:null,
  account: null,
  dacBalance: null,
  systemBalance: null,
  agreedTermsVersion: null,
  lastTransaction: null,
  isCandidate: null,
  dacVotes: null,
  msigIsSeenCache: [],
  
  settings: [
    { 
      name: 'toolbar_menu_items',
      type: 'boolean',
      value: true,
      group: 'toolbar'
    },
    { 
      name: 'toolbar_profile_image',
      type: 'boolean',
      value: true,
      group: 'toolbar'
    },
    { 
      name: 'toolbar_reveal',
      type: 'boolean',
      value: false,
      group: 'toolbar'
    },
    { 
      name: 'notify_dac_msg',
      type: 'boolean',
      value: false,
      group: 'notify',
      disabled: true
    },
    { 
      name: 'notify_success_msg',
      type: 'boolean',
      value: true,
      group: 'notify'
    },
    { 
      name: 'notify_info_msg',
      type: 'boolean',
      value: true,
      group: 'notify'
    },
    { 
      name: 'notify_error_msg',
      type: 'boolean',
      value: true,
      group: 'notify'
    },

    { 
      name: 'debug_data_structure',
      type: 'boolean',
      value: false,
      group: 'debug'
    },
    { 
      name: 'debug_dev_tools',
      type: 'boolean',
      value: false,
      group: 'debug'
    },
    { 
      name: 'debug_console_log',
      type: 'boolean',
      value: false,
      group: 'debug'
    },
    
    { 
      name: 'locale_numbers',
      type: 'boolean',
      value: true,
      group: 'locale'
    },
    { 
      name: 'locale_language',
      type: 'component',
      value: 'langselector',
      group: 'locale'
    },
    { 
      name: 'trx_delay',
      type: 'number',
      value: 0,
      group: 'advanced'
    },
    { 
      name: 'auto_logout_delay',
      type: 'number',
      value: 0,
      group: 'advanced'
    }
    
  ]

  
}
