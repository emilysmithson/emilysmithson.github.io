'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "69cf9c83dcc67b77290188dedc276fa9",
"/": "69cf9c83dcc67b77290188dedc276fa9",
"main.dart.js": "cc801e0460674e00327aef59bf486b43",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192%202.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512%202.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index%202.html": "ad2c727e3d1fa8ba03b515cd56f9cf1a",
"manifest.json": "e96c1b0694507f65cb849acfcb0a8f74",
"manifest%202.json": "9e910ca397fa13f5112efdc9d7526cf5",
"assets/AssetManifest.json": "ab54153c9561614bc28680eb3aebd52e",
"assets/NOTICES": "f7fd652be9a202c689b78279ae9a9ffc",
"assets/FontManifest.json": "9ad3d0ac75897e07593279bb5e2d12a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Pangolin-Regular.ttf": "7810feee2a587264c0d6058d52b60ae4",
"assets/fonts/Apple.ttf": "2917b564fbc60e11604b99cf0bafd6fc",
"assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/fonts/CoveredByYourGrace-Regular.ttf": "c037ec9dfaaeac60bc844d598e0185dd",
"assets/fonts/MyFlutterApp.ttf": "b22a3e94753902409401c2b36f7816d4",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/music/fish.mp3": "de746da2b16893fd07ec25de47d7fe1a",
"assets/assets/music/01%2520Track%252001.mp3": "11ba77696126e899a856a4c0b34c2115",
"assets/assets/music/g1_hands.wav": "e08d7b1b4560f97160cda7f4b4e9dd52",
"assets/assets/music/g1_fish.wav": "64e9e40a100a1ac63cb5be2b96a84907",
"assets/assets/music/hands.mp3": "916a61beb4950ebe4d1e27ca00d7e1a3",
"assets/assets/music/pzz_loop2.wav": "f5b794608933f28fd4d437618f3aabb1",
"assets/assets/music/g1_windmill.wav": "04d692d9544435cd236cb70a0b6a69cb",
"assets/assets/music/pzz_loop1.wav": "6f444c3d7b94976e1ca893dae820c736",
"assets/assets/music/windmill.mp3": "cc1b2065706fdeafec2d8ca35bb1ce22",
"assets/assets/music/bird.mp3": "53baabf3d0fd1c7d2dc4e15a74d77437",
"assets/assets/music/intro.mp3": "b71f3d41fdbdcd12e737393b987bce2e",
"assets/assets/music/gameTwo.wav": "0da48d82093672229f808dcda69167fe",
"assets/assets/music/g1_intro.wav": "09e2943ff0aea130034d004efeb85890",
"assets/assets/music/tete_epaule.mp3": "922ac3fc0a0dfddeba9feddfc085406c",
"assets/assets/music/g1_outro.wav": "f4053fc64c4c2742edb3687bdc71186b",
"assets/assets/music/g1_bird.wav": "da0af74634f296a2bf17c8a0f9775896",
"assets/assets/images/dog.png": "ee90062e6af5096bc56b6b03c26cd829",
"assets/assets/images/screenshot_iphone_11%2520game%2520one.svg": "80c26161761a09abf9ec2ea0ab969bb2",
"assets/assets/images/cd1.png": "811ac323be76304c104669668dd5ce8d",
"assets/assets/images/correct.png": "38aa88798165449cfa8eaae7f547ad7d",
"assets/assets/images/g1_fish.png": "d7be046228bc6ebfe59aab3efe4b5e17",
"assets/assets/images/cd3.png": "ac1aeb624133432555d85e61ae2e80cf",
"assets/assets/images/house2.psd": "fc29b5c8bf15e37551367789b07075ae",
"assets/assets/images/cake.png": "9e8fa5a7f5d6307a868fb31bdd65add4",
"assets/assets/images/icon.png": "5262cd04530b7ff6ddd37cb11429a543",
"assets/assets/images/spider.png": "feb1f6ea9481c8d24a57257c038ca9b5",
"assets/assets/images/g1_kite.png": "0d89b116ec94a1b6f21936c63fc62676",
"assets/assets/images/redland%2520green.svg": "1337f0e1ca87aaefeece19f63c640302",
"assets/assets/images/hat.png": "53aa3b2b5dbfa9f188ac28584bb93b42",
"assets/assets/images/cd2.png": "2d3e2805e26172e302adc578f6d41c53",
"assets/assets/images/title.png": "b6ca4592a500aa46eef1f10bda6569de",
"assets/assets/images/house2.png": "293cb1e2b40c07e0568244976a75e15c",
"assets/assets/images/brush.png": "3e9f7e13dd52f1930c483abe6435058f",
"assets/assets/images/g1_windmill.png": "19a1ae8c7183436d5d0d263e24ae2e1a",
"assets/assets/images/chansons_pour_apprendre.png": "bf6e127e70986dca2f7359d38f8486f7",
"assets/assets/images/cd4.png": "875ba4e99903e5523670070e36887bfd",
"assets/assets/images/info_button2.psd": "057ab9b7024ff6e9a574382cb3ca289c",
"assets/assets/images/g1_tree.png": "068113c8c46a14d0000b7a87e03930a2",
"assets/assets/images/g1_button_on.png": "86f6d2ebd5eda041662d4f112552ebe4",
"assets/assets/images/g1_button.psd": "668676d7f21355a47743a47d93e3d871",
"assets/assets/images/house.psd": "a5c52e2222472549be1fac157d5052d4",
"assets/assets/images/g2_button_on.psd": "148aa8ec7a7a045b6523d26680ffb6bd",
"assets/assets/images/pzz1.png": "bc3b9222f08afe0bbce262fea0000c4b",
"assets/assets/images/windmill.png": "434b905b1954aef6e611212ec89ffef8",
"assets/assets/images/pzz.psd": "8f3a9f11c8ce2641aa05b9486772d22b",
"assets/assets/images/info_button.psd": "ed4db216ee43a4cb823f907a3060d2f7",
"assets/assets/images/g1_car.png": "86548ad675cf7845c1ec1f25e185f918",
"assets/assets/images/bird.png": "b36e5e852ead5b8bd830184c4cabc68b",
"assets/assets/images/hands.mp3": "916a61beb4950ebe4d1e27ca00d7e1a3",
"assets/assets/images/umbrella.png": "2e600ba9e2382b665219f81f194705a0",
"assets/assets/images/arrow.png": "6d7f5d51fed94fd56bd4ff2bcfa46b1c",
"assets/assets/images/g1_hands.png": "d8f0a4978d5775fdae597695735e336d",
"assets/assets/images/pzz.png": "5b32a68df74af80475a1363c9091982f",
"assets/assets/images/logo_white1.png": "ad372621200898e51c9ba2a496d052d5",
"assets/assets/images/info_button.png": "88c20875675a43cda6412142619523ea",
"assets/assets/images/g1_button.png": "10ba39ac3dc0b93d50ca8ed21bbbc3a4",
"assets/assets/images/house.png": "bbebfbc51958cda32d4e7d29da420eb8",
"assets/assets/images/g1_cat.png": "658f255315e0ef0572ea91ec3455ff3a",
"assets/assets/images/g2_button_on.png": "66a1dc4e6cb0323575b81aba84bc0c95",
"assets/assets/images/splashscreen.svg": "fa21c373a6a13e7ba1863f86c96d1b04",
"assets/assets/images/character_with_kite.png": "6d26e3e6cea91bea7d4c5900dae27c24",
"assets/assets/images/g1_button_on.psd": "117c1a4fd01284fb1bc43ee612d526b2",
"assets/assets/images/socks.png": "6d6c56352b90246c601c8c31735caaf8",
"assets/assets/images/chansons_pour_samuser_1.jpg": "7617d10aab62a50ba18ecca6b95c8ed9",
"assets/assets/images/windmill.mp3": "cc1b2065706fdeafec2d8ca35bb1ce22",
"assets/assets/images/hands.png": "066b7425ab0d3eeb59d7295c9404c314",
"assets/assets/images/man.png": "afbabcdea0b477c931d95e9449390721",
"assets/assets/images/g1_socks.png": "a9ab4d8cebe931b9976e5aa59c2ded06",
"assets/assets/images/g1_balloon.png": "07cf563efda584fc855604fce7602577",
"assets/assets/images/chansons_pour_samuser_2.jpg": "812fadef666a7cec624cc431b82d5b0f",
"assets/assets/images/menu.png": "0c0a1d44140db58ec4728a576bde5d3f",
"assets/assets/images/cat.png": "84d55380ff01f129a5d9878218f06994",
"assets/assets/images/info_button2_on.psd": "b397378aafb11abbe7604607fa09982f",
"assets/assets/images/g1_house.png": "296b63e9f5464ecff5c1fe7a1494ceb8",
"assets/assets/images/icon2.png": "5262cd04530b7ff6ddd37cb11429a543",
"assets/assets/images/balloon.png": "a9d47ac6e813fc1c8eacd87e29124a51",
"assets/assets/images/g2_button.png": "46642968b0657fc3d0751673470c2eb0",
"assets/assets/images/character.png": "adfe0b56f6089ae7d400fdfc080e6ba9",
"assets/assets/images/g1_spider.png": "efc30e5f2a0f1800bcd7973dff0a46c6",
"assets/assets/images/logo.png": "6c67b2dc9ba63cf3389a3d335fb67c26",
"assets/assets/images/logo_white.png": "9e189a9b1c5485791ae71ca8b41c9602",
"assets/assets/images/chansons_pour_sendormir.jpg": "377ca8b8e3dc481aaf7f70e729d852a0",
"assets/assets/images/g2_button.psd": "f9350fd30cae4f95b355a05334ada1d4",
"assets/assets/images/logo.psd": "a23ecc55b7a62c685fce592fd04c84ac",
"assets/assets/images/menu.psd": "c1ceac22cb21bb318a1497acf981b464",
"assets/assets/images/tree.png": "3823225ec610620730587bd736a1e50f",
"assets/assets/images/intro.mp3": "b71f3d41fdbdcd12e737393b987bce2e",
"assets/assets/images/car.png": "3e9e4c6e504849bf230b75bf219a038e",
"assets/assets/images/g1_bird.png": "f5296234b6c3b1bc5f06d5252e7f6898",
"assets/assets/images/screenshot_iphone_8.svg": "65b6e4901b327a8a408b0d2d9c92909a",
"assets/assets/images/screenshot_iphone_11%2520game%2520two.png": "3b0a4491ffcbd66af0d0f406a22987dd",
"assets/assets/images/back_button.png": "b1f2b7280c5a106b2aa03239a0fd15d5",
"assets/assets/images/info_button_on.png": "e7cf265354e17402acb48e662b983e77",
"assets/assets/images/screenshot_iphone_11%2520game%2520two.svg": "63116870e6ba9000baeca9798681c29f",
"assets/assets/images/launcher_icon.png": "190b29b4f6a6f96b60c240fc1fde1cff",
"assets/assets/images/incorrect.png": "e84b4cb70a36d165f3ad50d5dac6adc6",
"assets/assets/images/brush_blue.png": "6f3597f6075fb1459a29f9cbf9507cf2",
"assets/assets/images/Default.png": "de14fba97186410cd84552a81185f8e3",
"assets/assets/images/screenshot_iphone_11.svg": "234e7d69cfde4fe59079c0d414f42e65",
"assets/assets/images/logo%2520copy.psd": "b444595c3ef9cbedf34984a41d54ffa1",
"assets/assets/images/scooter.png": "a9be838bf8e1045d9e4160648693b760",
"assets/assets/images/g1_dog.png": "82e9589d1286b9c8d14882b522e8f46f",
"assets/assets/images/chansons_dhiver.jpg": "bf4fc23d18f0a025ed3404f8f981ed57",
"assets/assets/images/g1_scooter.png": "4cf2174887e4b6642ba10f62744a29ba",
"assets/assets/images/kite.png": "6ed429cfa851edd62a1f60c66af5c2db",
"assets/assets/images/fish.png": "25357a65a4111bb3f1f800abd7d6e839",
"assets/assets/images/g1_hat.png": "37ecb179b5ae2fcd88737017649299ca",
"assets/assets/images/g1_cake.png": "65eba7d1f932509364859a9474df4b3f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
