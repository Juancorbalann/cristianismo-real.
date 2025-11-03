
import { set, get } from 'idb-keyval'
export const saveLocal = (k,v)=>set(k,v)
export const readLocal = (k)=>get(k)
