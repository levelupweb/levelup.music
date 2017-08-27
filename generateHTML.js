const generateHTML = (html, helmet) => 
`<!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="./dist/manifest.json" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./dist/css/bundle.css" />
    <link rel="stylesheet" href="./dist/static/css/main.7ce1660d.css" />
    <meta name="google-site-verification" content="QXUKw1SJVaDalKkjzNQ_hwXrg6poVFqZUhhmYyq6LFk" />
    <meta name="yandex-verification" content="221dd2bb84904410" />
    <link rel="stylesheet" href="./dist/css/flexboxgrid.css" />
    <link rel="shortcut icon" href="./dist/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="./dist/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./dist/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./dist/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./dist/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./dist/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./dist/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./dist/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./dist/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./dist/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./dist/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./dist/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./dist/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./dist/favicon/favicon-16x16.png">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta property="og:locale" content="ru_RU">
    <meta property="og:image" content="SITE IMAGE 537 240">
    <meta property="og:image:width" content="537">
    <meta property="og:site_name" content="SITE NAME" />
    <meta property="og:title" content="SITE TITLE" />
    <meta property="og:description" content="SITE DESCRIPTION" />
    <meta property="og:image:height" content="240">
  </head>
  <body>
    <noscript>
      ${html}
    </noscript>
    <div id="root"></div>
    <script src="./dist/bundle.js"></script>
   
  </body>
</html>
`
export default generateHTML;
