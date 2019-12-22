// class TailwindExtractor {
//   static extract(content) {
//     return content.match(/[A-z0-9-:\\/]+/g)
//   }
// }

// module.exports = {
//   content: [
//     './src/**/*.vue',
//     './src/**/*.js',
//     './src/**/*.jsx',
//     './src/**/*.html',
//     './src/**/*.pug',
//     './src/**/*.md',
//     './docs/**/*.md',
//     './blog/**/*.md',
//   ],
//   whitelist: [
//     'body',
//     'html',
//     'img',
//     'a',
//     'g-image',
//     'g-image--lazy',
//     'g-image--loaded',
//     'active',
//   ],
//   extractors: [
//     {
//       extractor: TailwindExtractor,
//       extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
//     },
//   ],
// }

new purgeCss({
            paths: glob.sync([
                path.join(__dirname, 'resources/views/**/*.blade.php'),
                path.join(__dirname, 'resources/assets/js/**/*.vue'),
                path.join(__dirname, 'resources/assets/vendor/**/*.vue')
            ]),
            extractors: [
                {
                    extractor: class {
                        static extract(content) {
                            return content.match(/[A-z0-9-:\/]+/g) || []
                        }
                    },
                    extensions: ['html', 'js', 'php', 'vue']
                }
            ]
        })