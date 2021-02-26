import LSZH from '@/locales/zh-CN'
import LSEN from '@/locales/en-US'
import { getDvaApp } from 'umi'

const language = {
  en: LSEN,
  cn: LSZH,
}

const getlang: (id: string, ns?: string) => string = (id, ns = 'index') => {
  const state = getDvaApp()._store.getState()[ns]
  const locale = state.locale
  return language[locale][id] || ''
}

export default getlang
