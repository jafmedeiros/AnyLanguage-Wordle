import { CONFIG } from './config'

export const VALIDGUESSES = [
  'anist',
  'anjam',
  'balgi',
  'balim',
  'bilan',
  'gilan',
  'hagul',
  'hagun',
  'hamom',
  'hasba',
  'hawil',
  'hidin',
  'hilin',
  'jilks',
  'mamst',
  'mandi',
  'midin',
  'milit',
  'momst',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
