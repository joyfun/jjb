const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const watch = require('gulp-watch');
const replace = require('gulp-replace');
const preprocess = require('gulp-preprocess');
const Bundler = require('parcel-bundler');
const Path = require('path');

async function bundleBuild(fileName) {
  let file = Path.join(__dirname, `./${fileName}`);
  let options = {
    outDir: './dist', // 将生成的文件放入输出目录下，默认为 dist
    outFile: fileName, // 输出文件的名称
    publicUrl: './static', // 静态资源的 url ，默认为 dist
    watch: false, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
    cache: true, // 启用或禁用缓存，默认为 true
    cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
    minify: (process.env.NODE_ENV === 'production'), // 压缩文件，当 时，会启用
    target: 'browser', // 浏览器/node/electron, 默认为 browser
    https: false, // 服务器文件使用 https 或者 http，默认为 false
    logLevel: (process.env.NODE_ENV === 'production') ? 1 : 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
    sourceMaps: (process.env.NODE_ENV != 'production'),
    hmrHostname: '', // 热模块重载的主机名，默认为 ''
    detailedReport: true // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
  };
  let bundler = new Bundler(file, options);
  await bundler.bundle();
}


function watchFile() {
  // watch many files
  watch([
    'manifest.json', '*.html', 'components/*.vue',
    'static/*.js', 'static/style/*.css'
  ], function () {
    exports.default()
  });
};

function packPriceChart() {
  return gulp.src([
    'node_modules/weui.js/dist/weui.min.js',
    'node_modules/@antv/g2/dist/g2.min.js',
    'static/priceChart.js'
  ])
  .pipe(concat('priceChart.js'))
  .pipe(replace('{{version}}', process.env.VERSION))
  .pipe(gulp.dest('build/static'));
};

function packContentJs() {
  return gulp.src([
    'node_modules/weui.js/dist/weui.min.js',
    'static/content_script.js'
  ])
  .pipe(concat('content_script.js'))
  .pipe(gulp.dest('build/static'));
}

function packContentStyle() {
  return gulp.src(['node_modules/weui/dist/style/weui.css', 'static/style/style.css'])
    .pipe(concat('content_style.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/static/style'));
};

function packStartStyle() {
  return gulp.src(['node_modules/weui/dist/style/weui.css', 'static/style/start.css'])
    .pipe(concat('start_style.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/static/style'));
};

function packPopupStyle() {
  return gulp.src([
    'node_modules/weui/dist/style/weui.css',
    'static/style/popup.css'
  ])
  .pipe(concat('popup_style.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('build/static/style'));
};

function moveStatic() {
  return gulp.src([
    'static/audio/*.*', 'static/image/*.*', 'static/image/*/*.*', 'static/style/*.css'
  ], { base: './' })
    .pipe(gulp.dest('build'));
};

function moveJs() {
  return gulp.src([
    'static/start.js',
    'static/mobile_script.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/dialog-polyfill/dialog-polyfill.js',
    'node_modules/@sunoj/touchemulator/touch-emulator.js',
  ])
  .pipe(gulp.dest('build/static'));
};

async function moveFile() {
  let browser = (process.env.BROWSER ? process.env.BROWSER : 'chrome')
  return gulp.src([
    'manifest.json', '*.html'
  ])
  .pipe(replace('{{version}}', process.env.VERSION))
  .pipe(replace('{{buildid}}', process.env.BUILDID))
  .pipe(replace('{{browser}}', browser))
  .pipe(preprocess({
    context: {
      Browser: browser
    }
  }))
  .pipe(gulp.dest('build'))
};


async function buildBundle() {
  console.log('build-bundle start')
  await bundleBuild('static/background.js')
  await bundleBuild('static/popup.js')
  console.log('build-bundle done')
};

async function moveBuildBundle() {
  console.log('move-build-bundle start')
  let browser = (process.env.BROWSER ? process.env.BROWSER : 'chrome')
  return gulp.src([
    'dist/*.js'
  ])
  .pipe(replace('{{version}}', process.env.VERSION))
  .pipe(replace('{{buildid}}', process.env.BUILDID))
  .pipe(replace('{{browser}}', browser))
  .pipe(preprocess({
    context: {
      Browser: browser
    }
  }))
  .pipe(gulp.dest('build/static'))
};

function moveBundleStatic() {
  return gulp.src([
    'dist/*.png', 'dist/*.svg', 'dist/*.jpg', 'dist/*.gif',
    'dist/*.css'
  ])
    .pipe(gulp.dest('build/static'));
};

const moveBuildBundleFile = gulp.series(moveFile, buildBundle, moveBuildBundle, moveBundleStatic)

exports.default = gulp.series(
  moveFile, moveJs, packPriceChart, packContentStyle, packPopupStyle, packStartStyle,
  packContentJs, moveBuildBundleFile, moveStatic
);

exports.dev = gulp.series(exports.default, watchFile);