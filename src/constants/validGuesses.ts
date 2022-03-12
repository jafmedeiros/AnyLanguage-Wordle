import { CONFIG } from './config'

export const VALIDGUESSES = [
  'Wd8w8',
  'kiz8s',
  'n8lka',
  'al8sa',
  'pegdi',
  'al8ka',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
