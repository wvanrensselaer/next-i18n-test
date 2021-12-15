# Next.js i18n Test

Demo showing some limitations in current Next.js `i18n` routing.

Add to your `/etc/hosts` file:

```
127.0.0.1 local.example.com local.example.ca
```

Then run the server:

```shell
yarn dev
```

Then visit:

- http://local.example.com:3000/
  - `Locale: en-US`
- http://local.example.ca:3000/
  - `Locale: en-CA`
- http://local.example.ca:3000/fr
  - `Locale: fr` - Would prefer `Locale: fr-CA` but have to use http://local.example.ca:3000/fr-CA where `-CA` is redundant since we are on a `.ca` domain.
