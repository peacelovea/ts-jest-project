import { add } from './utils'
import { obj } from './services/index'

export const demo = (a: number, b: number): number => {

  return add(obj.a, obj.b)
}

export const isArray = (params: any): boolean => {
  return Array.isArray(params)
}