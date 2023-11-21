###### Склонения существительных
```js
function declensionOfNouns(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

declensionOfNouns(1, ['город', 'города', 'городов']);
```
###### Генерация пароля
```php
base64_encode(sha1($_GET['password'], TRUE));
```
###### nib
```stylus
// autoprefixer: You should write display: flex by final spec instead of display: box
flex-version = flex
support-for-ie = false
vendor-prefixes = official
```
###### eventslibjs
```js
import {
  on,
  once,
  off,
  get,
} from 'eventslibjs/dist/events.min';

function currentTarget(target, current) {
  return _.isString(current) ? target.closest(current) : current;
}

export default {
  get() {
    return get();
  },

  off(...args) {
    off(...args);
  },

  on(event, current = document, fn = _.noop) {
    on(event, current, (e) => {
      fn(e, currentTarget(e.target, current), e.detail);
    });
  },

  once(event, current = document, fn = _.noop) {
    once(event, current, (e) => {
      fn(e, currentTarget(e.target, current), e.detail);
    });
  },

  emit(name, params = {}) {
    const event = new window.CustomEvent(name, { detail: params });
    window.dispatchEvent(event);
  },

  trigger(name = 'click', el = window) {
    const event = new window.Event(name);
    el.dispatchEvent(event);
  },

  watch(event, fn) {
    this.on(event, window, fn);
  },
};
```
###### colors.styl
```stylus
c-black    = #000000 // чёрный
c-white    = #ffffff // белый
c-knapweed = #b3d4fc // бледно-васильковый
c-yellow   = #f5da55 // тусклый жёлтый

// flat colors
flat-turquoise     = #1abc9c
flat-emerland      = #2ecc71
flat-peterriver    = #3498db
flat-amethyst      = #9b59b6
flat-wetasphalt    = #34495e

flat-greensea      = #16a085
flat-nephritis     = #27ae60
flat-belizehole    = #2980b9
flat-wisteria      = #8e44ad
flat-midnightblue  = #2c3e50

flat-sunflower     = #f1c40f
flat-carrot        = #e67e22
flat-alizarin      = #e74c3c
flat-clouds        = #ecf0f1
flat-concrete      = #95a5a6

flat-orange        = #f39c12
flat-pumpkin       = #d35400
flat-pomegranate   = #c0392b
flat-silver        = #bdc3c7
flat-asbestos      = #7f8c8d

// social colors
social-facebook    = #3b5999
social-messenger   = #0084ff
social-twitter     = #55acee
social-linkedin    = #0077B5
social-skype       = #00AFF0
social-dropbox     = #007ee5

social-wordpress   = #21759b
social-vimeo       = #1ab7ea
social-slideshare  = #0077b5
social-vk          = #4c75a3
social-tumblr      = #34465d
social-yahoo       = #410093

social-googleplus  = #dd4b39
social-pinterest   = #bd081c
social-youtube     = #cd201f
social-stumbleupon = #eb4924
social-reddit      = #ff5700
social-quora       = #b92b27

social-yelp        = #af0606
social-weibo       = #df2029
social-producthunt = #da552f
social-hackernews  = #ff6600
social-soundcloud  = #ff3300
social-blogger     = #f57d00

social-whatsapp    = #25D366
social-wechat      = #09b83e
social-line        = #00c300
social-medium      = #02b875
social-vine        = #00b489
social-slack       = #3aaf85

social-instagram   = #e4405f
social-dribbble    = #ea4c89
social-flickr      = #ff0084
social-foursquare  = #f94877
social-behance     = #131418
social-snapchat    = #fffc00
```
