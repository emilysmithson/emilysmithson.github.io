'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d01781d574d16ec75ea525c0830a98d9",
"/": "d01781d574d16ec75ea525c0830a98d9",
"main.dart.js": "2b272299f0ff6d4816242e1d71fc5688",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "290285abf1b02519753940a8a015426e",
"assets/AssetManifest.json": "a814b064874cf51459cc5a21012e024b",
"assets/NOTICES": "c99e333c4ef2331257c3eefca46d5e95",
"assets/FontManifest.json": "f4aeafa56df04193ab930d194642b8a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MyFlutterApp.ttf": "0d7a3b642a9c31e4c75097443ff55295",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/CustomIcons.ttf": "7b5aa3b511e511d6875d92e268e05234",
"assets/assets/avonmouth.flr": "2b660f379b35b149002809bd35b11d29",
"assets/assets/royal_victoria_bath.flr": "5b13c4e2e5c15d02a0d46b313e7a888b",
"assets/assets/netham.flr": "3dcc1e0540f942f65fef02a2e6caa084",
"assets/assets/perrets_park.flr": "82cc71660419c2f7d0ffecdd5cde5736",
"assets/assets/victory_park.flr": "532d5a52a66cb94b5bae471beeb1ed24",
"assets/assets/canford_park.flr": "a1c9648202ae2d0df715b384d2e4eb90",
"assets/assets/southmead.flr": "02b0d6250295c3eb3ced9e209f82edec",
"assets/assets/vp_information.png": "8bbffae1fc727b7b868c87e94e9dd65b",
"assets/assets/button_pressed.png": "e90a791846eec9dbf83f341336158c39",
"assets/assets/Duckpond.flr": "b66ad86067e88a7c87b370cf6ef0f920",
"assets/assets/Sunshine.flr": "10aadb95dd0baf3b5eb35a73b37a20c3",
"assets/assets/lamplighters.flr": "fb78f9ee641b866e36d02206df84dbd9",
"assets/assets/prize.flr": "44b8a3e86e69d1dce6b49c98cc72884e",
"assets/assets/portishead.flr": "d04c94c88d1cd5ab5c3cd705e7268d86",
"assets/assets/brandon_hill.flr": "f2eb224eb81cc6432133218ab34e08fe",
"assets/assets/netham3.png": "cb5c6d4d9528dee631d7cabf5da2ee5b",
"assets/assets/stoke_lodge.flr": "b5c5c644e0bc28fdb75b68499eb0e030",
"assets/assets/playground_information.png": "1bd0f7ebffb5c45b0c52f68c760dc3bd",
"assets/assets/felix_road.flr": "6887cb57c667c18b46b32890d3306aaf",
"assets/assets/blaise_castle.flr": "4299553ad325fe585be2ce199b840b33",
"assets/assets/pittville.flr": "9339fd02aa1d9a69c1853867f6dcdbd7",
"assets/assets/sandpit.flr": "3808daf4a2b34cd9dc9d2038ce6fcb66",
"assets/assets/gainsborough_square.flr": "28f14c46954dd680d05e309e1bab3562",
"assets/assets/elm_park.flr": "d460197feab3378254464afc033cb506",
"assets/assets/kingsgate.flr": "0ab9ee9ec3b9b9f450c0bb9edbcd555c",
"assets/assets/sky_toned_down.svg": "b01af60d668109fd06002395b779702b",
"assets/assets/background.png": "52837bd34073899cc48c353dcfc39c14",
"assets/assets/victoria_park_bristol.flr": "364f737a1e76fbd30b70951dcc2db16f",
"assets/assets/sky_header.png": "1223a087a104edc47c60156400c57c6c",
"assets/assets/oldbury_court_estate.flr": "b63a79e985e336b5a9ad7db64c5da5e8",
"assets/assets/troopers_hill.flr": "ff87c2f193978cb9ae1897c69472cacf",
"assets/assets/st_andrews.flr": "b51900a48a165470efbf4c2cff317451",
"assets/assets/mobray.flr": "22a4ebaaf1b73830b8657ca008d52523",
"assets/assets/redcatch.flr": "c9cc38a06d240183e2149ab1cdbc12a6",
"assets/assets/list_information.png": "e596921c9c4e03d8687a7243d546d776",
"assets/assets/sky.png": "aabd6b154c0cfa3a0b4f26138a0ef3b3",
"assets/assets/owl.flr": "509675bd7cff3810d173df790d019315",
"assets/assets/clevedon.flr": "2b0edbba8dce163d6a3e69537768ce9b",
"assets/assets/st_george.flr": "64eafe138b97499634a6bc97d6499a2d",
"assets/assets/mundy_playing_fields.flr": "7045be9978e6020c4cee3ed8e0c2272c",
"assets/assets/horfield.flr": "d2f8cda36b2462fe8f486a9ec74bd9a6",
"assets/assets/redland_green.flr": "2b70f1d1c50a4f5026b4012ec9e6885b",
"assets/assets/the_vench.flr": "053749fb98d2713911697adec292920a",
"assets/assets/kings_head_lane.flr": "9e98bcf4405f0d000fa4a4cb9d1340db",
"assets/assets/page_park.flr": "dec6fd0fa9dcab89884d2cddc95ebd0e",
"assets/assets/victoria_cardiff.flr": "e7d1cef53dac5e1d03df5fefc3aa910c",
"assets/assets/clifton.flr": "5a151cf9adbdcd62d942208002282ed2",
"assets/assets/greville_smyth.flr": "a045a61f28eae9c9b8d52425890cc42a",
"assets/assets/robin.flr": "7e8f6cf3a4a68dd63b61766c825a6e8c",
"assets/assets/cafe.flr": "6fde90737c4959f15405bc0df54a48ab",
"assets/assets/bench.flr": "317e04c35c4ecfbc85fa9cd709414851",
"assets/assets/monks_park.flr": "45e4d431d4944afcb17e4dba875a5383",
"assets/assets/hengrove.flr": "a83d1b1205726a87a7b46c21918c31bd",
"assets/assets/cotham_gardens.flr": "bb7e78248fd36e957ed35ab128f97466",
"assets/assets/map_information.png": "99a10e9272a7301980d3f830d91d4d5f",
"assets/assets/swing_character.flr": "379fc3fe3bb414e2469df02afa2e7916",
"assets/assets/arnos_court.flr": "bac7009c880dcbd816e1eaa14e3bca84",
"assets/assets/button.png": "6d75a78f851e132f0dc54796bae2e18c"
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
