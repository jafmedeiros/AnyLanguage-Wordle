import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'ch',
  'd',
  'e',
  'g',
  'h',
  'i',
  'k',
  'l',
  'm',
  'n',
  '8',
  'o',
  'p',
  's',
  't',
  'u',
  'w',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
