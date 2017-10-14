"use strict"

const include = file => {

  const scripts = document.getElementsByTagName('script')
  let found = false
  for (let i = 0; i < scripts.length; i++) {
    found = found || scripts[i].src.includes(file)
  }

  if (found) {
    console.log(`[INCLUDE] Including ${file}`)
    const script = document.createElement('script')
    script.src = file
    document.head.appendChild(script);
  }

}
