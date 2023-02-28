const gulp = require("gulp")
const del = require("del")
const path = require("path")
const fs = require("fs")
const cp = require("child_process")

gulp.task("clean", function () {
  return del(["src/**/*.d.ts"])
})

// vue-tsc src/components/**/*.vue --declaration --emitDeclarationOnly --jsx react
gulp.task("gen", function (cb) {
  const cwd = process.cwd()
  process.env.PATH += `:${path.join(cwd, "node_modules", ".bin")}`
  // console.log(process.env.PATH)
  cp.exec("vue-tsc --declaration --emitDeclarationOnly", function (err, stdout, stderr) {
    cb()
  })
})

gulp.task("copy", function (cb) {
  const originPath = "./src/components"
  const destPath = "./lib/ehl-ui.d.ts"
  if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath)
  }
  const dirs = fs.readdirSync(path.resolve(originPath))
  let destContent = "declare module 'ehl-ui' {\n"
  dirs.forEach(dir => {
    if (dir.startsWith("E")) {
      try {
        const p = path.join(originPath, dir, "src", "index.vue.d.ts")
        const info = fs.statSync(p)
        if (info.isFile()) {
          const content = fs.readFileSync(p, "utf-8")
          destContent = destContent.concat(content.replace("export default _default;", "").replace(/_default/g, dir))
        }
      } catch (e) {
        console.log("错误")
      }
    }
  })
  destContent = destContent.concat("}")
  fs.writeFileSync(destPath, destContent)
  cb()
})

gulp.task("build", gulp.series("clean", "gen", "copy", "clean"))
