import { createI18n } from "vue-i18n";

//import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants/trans'
import en from '@/locales/en.json'

const numberFormats = {
  'EUR': {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'USD': {
    currency: {
      style: 'currency', currency: 'USD', currencyDisplay: 'symbol' ,minimumFractionDigits: 2
    }
  },
  'ALL': {
    currency: {
      style: 'currency', currency: 'ALL', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'SEK': {
    currency: {
      style: 'currency', currency: 'SEK', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'NOK': {
    currency: {
      style: 'currency', currency: 'NOK', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'PLN': {
    currency: {
      style: 'currency', currency: 'PLN', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'LTL': {
    currency: {
      style: 'currency', currency: 'LTL', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'LVL': {
    currency: {
      style: 'currency', currency: 'LVL', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'GBP': {
    currency: {
      style: 'currency', currency: 'GBP', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'ISK': {
    currency: {
      style: 'currency', currency: 'ISK', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'CHF': {
    currency: {
      style: 'currency', currency: 'CHF', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'HRK': {
    currency: {
      style: 'currency', currency: 'HRK', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'BAM': {
    currency: {
      style: 'currency', currency: 'BAM', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'RSD': {
    currency: {
      style: 'currency', currency: 'USD', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'MKD': {
    currency: {
      style: 'currency', currency: 'MKD', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'BGN': {
    currency: {
      style: 'currency', currency: 'BGN', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'RON': {
    currency: {
      style: 'currency', currency: 'RON', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
  'MDL': {
    currency: {
      style: 'currency', currency: 'MDL', currencyDisplay: 'symbol', minimumFractionDigits: 2
    }
  },
}

export default createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: { en },
  numberFormats
});

// export default createI18n({
//   locale: DEFAULT_LANGUAGE, // set locale
//   fallbackLocale: FALLBACK_LANGUAGE,
//   messages: { en },// set locale messages
//   numberFormats
// })
