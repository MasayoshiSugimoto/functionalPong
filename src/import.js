"use strict"

const include = (includeMap => file => {
  if (!includeMap.has(file)) {
    console.log(`[INCLUDE] Including ${file}`)
    includeMap.set(file, true)
    document.createElement('script').src = file
  }
})(new Map())
