# Bootstrap

From: https://getbootstrap.com/

```console
$ cd vendor
$ curl -LO https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip
$ unzip bootstrap-4.3.1-dist.zip
$ mv bootstrap-4.3.1-dist bootstrap
```

## Update

```console
$ git rm -r bootstrap
$ unzip bootstrap-4.3.1-dist.zip
$ mv bootstrap-4.3.1-dist bootstrap
$ git add bootstrap
```

# jQuery

From: https://jquery.com/

```console
$ cd vendor
$ mkdir jquery
$ curl -o jquery/jquery.min.js https://code.jquery.com/jquery-3.4.1.min.js
```

# jQuery-easing

From: https://github.com/gdsmith/jquery.easing

```console
$ cd vendor
$ mkdir jquery-easing
$ curl -o jquery-easing/jquery-easing.min.js https://raw.githubusercontent.com/gdsmith/jquery.easing/master/jquery.easing.min.js
```

# animate.css

From: https://daneden.github.io/animate.css/

```console
$ cd vendor
$ mkdir animate.css
$ curl -L -o animate.css/animate.min.css https://raw.githubusercontent.com/daneden/animate.css/master/animate.min.css
```

# Agency

From: https://startbootstrap.com/template-overviews/agency/

```console
$ cd vendor
$ mkdir agency
$ curl -o agency/agency.min.js https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-agency/master/js/agency.min.js
```

# Lato font

> Lato is a sanserif type­face fam­ily designed in the Sum­mer 2010 by
> Warsaw-​​based designer Łukasz Dziedzic (“Lato” means “Sum­mer” in Pol­ish).
> In Decem­ber 2010 the Lato fam­ily was pub­lished under the open-​​source Open
> Font License by his foundry tyPoland, with sup­port from Google.

From: http://www.latofonts.com/

Our customization: Remove "Lato2OFLWeb/Lato/" directory structure and use only LatoLatin font.

```console
$ cd vendor
$ curl -LO http://www.latofonts.com/download/Lato2OFLWeb.zip
$ unzip Lato2OFLWeb.zip
$ rm -rf __MACOSX Lato2OFLWeb/Lato
```

# Font Awesome

> Get vector icons and social logos on your website with Font Awesome, the web's
> most popular icon set and toolkit. 

From: https://fontawesome.com/

Out customization: Remove `fontawesome/{js,less,metadata,scss,sprites,svgs}/`.

```console
$ cd vendor
$ curl -O https://use.fontawesome.com/releases/v5.11.2/fontawesome-free-5.11.2-web.zip
$ unzip fontawesome-free-5.11.2-web.zip
$ mv fontawesome-free-5.11.2-web fontawesome
$ rm -rf fontawesome/{js,less,metadata,scss,sprites,svgs}
```
