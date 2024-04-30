//=============//
//| COLORDIZZ |//
//=============//
export function RGBA(red,green,blue,alpha) {
  if (red > 255) {
    return "ERROR"
  } else if (green > 255) {
    return "ERROR"
  } else if (blue > 255) {
    return "ERROR"
  } else {
    return [red,green,blue,alpha]
  }
}

export const RED = RGBA(255,0,0,0)
export const BLUE = RGBA(0,0,255,0)
export const GREEN = RGBA(0,255,0,0)

export function mixcolor(color1,color2) {
  return color1 + color2
}

export const YELLOW = mixcolor(RED, GREEN)
export const PURPLE = mixcolor(RED, BLUE)
export const CYAN = mixcolor(GREEN, BLUE)

//============//
//| ANGELTAT |//
//============//

import { Vector2D } from { "https://github.com/Agsgt1/AngelTaT/" }
export function print(x) {
  console.log.bind(x)
}
//just in case {
import { "./Claire.js" }
//}
