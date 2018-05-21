const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("**/*.*").on("change", browserSync.reload);
});

gulp.task("default", () => {
    
});