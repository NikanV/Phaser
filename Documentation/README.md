<div dir="rtl">

## داک استفاده از ابزار phaser

### 📝فهرست
 - [نصب phaser](#نصب-phaser)
 - [چینش در phaser](#چینش-در-phaser)
   - [Game](#Game)
   - [Game State](#Game-States)
   - [Assets Loader](#Assets-Loader)
   - [Game Objects](#Game-Objects)
   - [Input Handling](#Input-Handling)
   - [Camera](#Camera)
   - [Physics](#Physics)   
 - [دستورات phaser](#دستورات-phaser)
   - [دستورات game state](#دستورات-game-state-ها)
   - [دستور asset loader](#دستور-asset-loader)
   - [دستور ساخت game object](#دستور-ساخت-game-object)
   - [دستور ساخت عکس](#creating-images)
   - [دستور ساخت text](#creating-text)
   - [دستور ساخت sprites](#creating-sprites)
   - [دستور ساخت tilesprites](#creating-tilesprites)
   - [دستور ساخت tilemaps](#creating-tilemaps)
   - [دستور sound and music](#creating-sound-and-music)
   - [دستور game objects](#گروه-بندی-game-object-ها)
   - [دستور game physics](#game-physics)
   - [دستور camera](#game-camera)
   - [دستور positioning element](#positioning-elements)

## نصب phaser
برای نصب `phaser` میتوانید `repo` آنرا از گیتهاب clone کنید:

```git
git clone https://github.com/photonstorm/phaser.git
```

یا با استفاده از `npm` با دستور زیر آنرا نصب نمایید:
```
npm i phaser
```
  
یا با استفاده از `cdn` آن که در زیر آمده است، آنرا در بخش `src` در `script` خود اضافه کنید:

برای ورژن کامل:
``` 
https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.js
```

برای ورژن `minified`:
``` 
https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js 
```

## چینش در phaser
بازی‌های `phaser` با ترکیب elementهای زیر ساخته میشوند:

## Game
چهارچوب `phaser` یک object که بازی را نمایش میدهد بنام `Game` درست میکند.
## Game States
در `phaser` با استفاده از `Game State`ها میتوان به `scene`های مربوط به بازی مانند `credits`، `maps` و یا `start` دسترسی داشت. این element قابلیت اینکه بخش های مختلف بازی را بصورت مجزا از هم در یک گروه داشت را به کاربر میدهد.
## Assets Loader
این element به کاربر امکان اضافه کردن `asset` وسط بازی مانند `image`، `timelaps` و یا `sprite sheet` را میدهد.
## Game Objects
المان `game object` همه‌ی object های `static` یا `interactive` درون بازی مانند پس زمینه یا `time laps` ها میباشند. 
## Input Handling
فیزر کلاس های کمکی برای `input handling` از طریق `keyboard`، `mouse` و یا `gamepad` را نیز بهمراه پشتیبانی `HUD` و `HUD user input` برای کاربران فراهم میکند.
## Camera
چهارچوب `phaser` بکمک دوربین تعریف شده در آن بهمراه helper ها به کاربر امکان دنبال کردن بازیکن را در حین بازی میدهد.
## Physics
این چهارچوب با فراهم کردن چندین `physics engine` برای پیاده سازی مکانیک‌های بازی، امکان پیاده سازی مکانیک هایی مانند `movement`، `jumping`، `falling` و برخورد را به کاربر میدهد. 

## دستورات phaser

پس از اضافه کردن `phaser` به تگ `script` در فایل `html`، میتوان در فایل `js` از دستورات زیر استفاده نمود

## دستورات game state ها

در هر `game state` در `phaser`، سه `method` با نام های `preload`، `create` و `update` وجود دارد که میتوان هر کدام از آنها را با استفاده از دستور زیر در حالت `game` قرار داد 

```javascript
game.state.add(stateKey, state)
```

## دستور asset loader

منابع معمولا در مرحله `preload` بارگذاری میشوند و میتوان آنهارا بصورت زیر بارگذاری کرد:

```javascript
// load image
game.load.image(key, path)
// load spritesheet
game.load.spritesheet(key, path, width, height, /*opt numberOfCells*/)
// load tilemap
// where tilemapFormat can be for instance: Phaser.Tilemap.TILED_JSON
game.load.tilemap(key, path, null, tilemapFormat)
game.load.tilemap(key, null, tilemapObject, tilemapFormat)
// load sounds or music
game.load.audio(key, path)
```


## دستور ساخت game object
برای ساختن یک `game object` میتوان آنرا به صورت های زیر ساخت


## Creating Images
```javascript
const image = game.add.image(x, y, key)
// if it is associated to a spritesheet
// it will show the first frame in the spritesheet
```
## Creating Text
```javascript
// you can create text like this
const text = game.add.text(x, y, someText, textOptions)
// The text options can also be set via properties
text.font = 'bold 50px Arial' // style, size and font family.
text.fill = '#333333' // hex color
text.stroke = '#333333' // hex color
text.strokeThickness = 1
text.fontSize = 24 // pixels
text.align = 'center' // text-align
text.text = 'new text' // text
```

## Creating Sprites

```javascript
const sprite = game.add.sprite(x, y, key)
```
و سپس:
```javascript
sprite.animations.add(animationName, frames, framesPerSecond, isLoop)
```
و برای اجرای آن:
```javascript
sprite.animations.play(animationName)
```


## Creating TileSprites
یک `TileSprite`، مانند یک `Sprite` است که `texture` آن در حال تکرار است.

```javascript
const tileSprite = game.add.tileSprite(x, y, width, height, key)
```
برای ساخت آن بصورت خودکار نیز میتوان از دستور زیر استفاده نمود:
```javascript
tileSprite.autoScroll(x, y)
```

## Creating Tilemaps
این کار پس از درست بارگذاری asset ها در preload اتفاق میفتد.
```javascript
// load tileset
game.load.image(tilesetKey, path)
// load tilemap
// where tilemapFormat can be for instance: Phaser.Tilemap.TILED_JSON
game.load.tilemap(key, path, null, tilemapFormat)
game.load.tilemap(key, null, tilemapObject, tilemapFormat)
```

## Creating Sound and Music
```javascript
// create sound game object
const sound = game.add.audio(key)
// set volume
sound.volume = 0.7
// loop sound (useful for the game background music)
sound.loop = true
// play sound
// it'll play the sound every time we call the play method
sound.play()
// stop sound
sound.stop()
```

## گروه بندی game object ها
```javascript
// create group
const group = game.add.group()

// add items to group
group.add(sprite)
group.add(anotherSprite)

// then interact with all items via group
// these changes are applied to every element within the group
group.setAll(key, value)
```

## Game Physics
```javascript
game.physics.startSystem(Phaser.Physics.Arcade)
game.physics.arcade.enable(gameObject)
// alternatively
game.physics.arcade.enable([gameObject1, gameObject2, etc])
```

## Game Camera
```javascript
game.camera.follow(mainCharacter)
// fixed to camera
gameObject.fixedToCamera = true
// position in relation to camera
gameObject.cameraOffset.setTo(x, y)
```

## Positioning Elements
```javascript
this.sprite.anchor.set
```
</div>