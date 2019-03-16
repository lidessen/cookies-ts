# vue-cookies-ts

A simple tool for handling browser cookies

## Installation

```bash
npm install cookies-ts --save
```

```ts
import Cookies from "cookies-ts"

const cookies = new Cookies()
```

## Api

syntax format: **cookies.[method]**

### config

Set global config

```ts
(option: CookiesOption) => void

//example

cookies.config({
    expires?: string | number | Date,
    path?: string,
})  // default: expireTimes = 1d , path=/
```

### set

Set a cookie

```ts
(key: string, value: any, option: CookiesOption) => Cookies

//example

cookies.set(keyName: string, {
    expires?: string | number | Date,
    path?: string,
    domain?: string,
    secure?: boolean
}) 
```

### get

Get a cookie

```ts
(key: string) => string | null | object

//example

cookies.get(keyName: string)
```

### remove

Remove a cookie

```ts
(key: string, option: CookiesOption) => Cookies | boolean

//example

cookies.remove(keyName: string, {path: string, domain: string})
```

### isKey

If exist a `cookie name`

```ts
(key: string) => boolean

//example

cookies.isKey(keyName: string)
```

### keys

Get All `cookie name`

```ts
() => string[]

//example

cookies.keys()
```

## Example Usage

#### Set global config

```js
// 30 day after, expire
cookies.config({ expires: "30d" })

cookies.config({ expires: new Date(2019,03,13).toUTCString() })

// 30 day after, expire, '' current path , browser default
cookies.config({ expires: 60 * 60 * 24 * 30, path: "" })
```

#### Support json object

```js
var user = { id:1, name:'Journal', session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' }

cookies.set('user', user)

// print user name
console.log(cookies.get('user').name)
```

#### Set expire times

**Suppose the current time is : Sat, 11 Mar 2017 12:25:57 GMT**

**Following equivalence: 1 day after, expire**

**Support chaining sets together**

``` javascript
 // default expire time: 1 day
Cookies
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
        // number + d , ignore case
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", { expires: "1d" })
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", { expires: "1D" })
        // Base of second
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", { expires: 60 * 60 * 24 })
        // input a Date, + 1day
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", { expires: new Date(2017, 03, 12) })
        // input a date string, + 1day
        .set("user_session", "25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", { expires: "Sat, 13 Mar 2017 12:25:57 GMT" })
```

#### Set expire times, input number type

```js
// 1 second after, expire
cookies.set("default_unit_second", "input_value", { expires: 1 })

// 1 minute 30 second after, expire
cookies.set("default_unit_second", "input_value", { expires: 60 + 30 })

// 12 hour after, expire
cookies.set("default_unit_second", "input_value", { expires: 60 * 60 * 12 })

// 1 month after, expire
cookies.set("default_unit_second", "input_value", { expires: 60 * 60 * 24 * 30 })
```

#### Set expire times - end of browser session

```js
// end of session - use string!
cookies.set("default_unit_second", "input_value", { expires: "0" })
```

#### Set expire times , input string type

| Unit   | full name |
| ----------- | ----------- |
| y           |  year       |
| m           |  month      |
| d           |  day        |
| h           |  hour       |
| min         |  minute     |
| s           |  second     |

**✔ caseless for unit**

**❌ combination not supported**

**❌ double value not supported**

```js
// 60 second after, expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "60s" })

// 30 minute after, expire, ignore case
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "30min" })

// 24 day after, expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "24d" })

// 4 month after, expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "4m" })

// 16 hour after, expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "16h" })

// 3 year after, expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: "3y" })

// input date string 
cookies.set('token',"GH1.1.1689020474.1484362313", { expires: new Date(2017,03,13).toUTCString() })

cookies.set("token","GH1.1.1689020474.1484362313", { expires: "Sat, 13 Mar 2017 12:25:57 GMT " })
```

#### Set expire support date

```js
var date = new Date

date.setDate(date.getDate() + 1)

cookies.set("token","GH1.1.1689020474.1484362313", { expires: date })
```

#### Set never expire

```js
// never expire
cookies.set("token","GH1.1.1689020474.1484362313", { expires: Infinity })

// never expire , only -1,Other negative Numbers are invalid
cookies.set("token","GH1.1.1689020474.1484362313", { expires: -1 }) 
```

#### Set other arguments

```js
// set path
cookies.set("use_path_argument","value", { expires: "1d", path: "/app" })

// set domain, default 1 day after,expire
cookies.set("use_path_argument","value", { domain: "domain.com" })

// set secure
cookies.set("use_path_argument","value", { secure: true })
```

#### Other operation

```js
// check a cookie exist
cookies.isKey("token")

// get a cookie
cookies.get("token")

// remove a cookie
cookies.remove("token")

// get all cookie key names, line shows
cookies.keys().join("\n") 
```

## Warning

**`Cookies` key names Cannot be set to `['expires','max-age','path','domain','secure']`**

## Explaination

**[Cookies-ts](https://github.com/ztytotoro/vue-cookies-ts) is developed from [vue-cookies](https://github.com/cmp-cc/vue-cookies) without dependencies**

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016-present, ztytotoro
