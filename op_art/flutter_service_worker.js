'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "188c3ae8e2c020d8815beff477859bab",
"index.html": "d19c261608254acad7102c4982dec27a",
"/": "d19c261608254acad7102c4982dec27a",
"main.dart.js": "ee14942bd55116302767c4c65d2565d2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd5bed6a21cef061a8b26007f202c619",
"assets/AssetManifest.json": "584d443ba474daf0665d6f0d78eca1ac",
"assets/NOTICES": "984bac67fb999614d28abbf754d93fdf",
"assets/FontManifest.json": "b5e13a429fdbd2ab15b9cee86504d1fa",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "c1242726c7eac4eb5e843d826f78fb1b",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/lib/assets/wallpaper_200.png": "831f1ea748861e90019866e087590249",
"assets/lib/assets/quads_400.png": "fb36c4f69155ef9dfebd828e2b8c03dc",
"assets/lib/assets/fibonacci_300.png": "f2c28dd48495f58e08f44438b74c090a",
"assets/lib/assets/riley_100.png": "f018979261f4ef08c9fd7cd356937706",
"assets/lib/assets/tree_150.png": "d2bcf45ff58d0445c89925963c4f411c",
"assets/lib/assets/icon_4020.png": "a0274c044bff85edef6afdc2d740dc55",
"assets/lib/assets/wave_500.png": "a593de6da0a05ab5bbc4a301e215ad64",
"assets/lib/assets/hexagons_150.png": "0c27fc97b07607400c4a8e7e704f9148",
"assets/lib/assets/icon.png": "f87777b699d9085464c66f8b2f9660ae",
"assets/lib/assets/diagonal_75.png": "3b08695e42b64b1b2c3ebcef890b18e5",
"assets/lib/assets/fibonacci_100.png": "fa1a2de7bb70a46317b7abb1231c4479",
"assets/lib/assets/riley_300.png": "6adbcc6624d2d4caa9ff755f43b0ed4e",
"assets/lib/assets/shapes_400.png": "3d4c4323e549fdb07079e6bb10d4c8d2",
"assets/lib/assets/fibonacci_500.png": "e6b591f817840ba045cbd4dc1425abbd",
"assets/lib/assets/fibonacci_75.png": "b6f94f8b1ca07ed80e5e9f35b17df096",
"assets/lib/assets/neighbour_150.png": "58ca8d33b7025f0fb17314f1c4eb170e",
"assets/lib/assets/quads_200.png": "b2d109ef63cde115eccdac041465fe58",
"assets/lib/assets/wallpaper_400.png": "38fdcb4b82a131cb88b75181af1c1c1a",
"assets/lib/assets/wave_100.png": "3ad755cdee07a09ae00956218156d163",
"assets/lib/assets/wallpaper.png": "d8c4210021544c668cabb25354218327",
"assets/lib/assets/icon_1000.png": "715df492ca547550a396ff6ba37113cc",
"assets/lib/assets/wave_300.png": "e49a1e754892aca1db69f5730ead44a2",
"assets/lib/assets/squares_150.png": "cb2e5cfea68d313bc047506992ef002a",
"assets/lib/assets/shapes_200.png": "0d9ca81ee916a6d78a023b7f68ea6434",
"assets/lib/assets/riley_500.png": "23fc9fb5f64a69743756909c8e64fc14",
"assets/lib/assets/maze_75.png": "2fe20ff4a5630177655d50eccdb09af8",
"assets/lib/assets/wave_75.png": "24c4301280ffa09142147877c37bce22",
"assets/lib/assets/web_hi_res_512.png": "f5199030920c21c49ed3be1f1b93cba8",
"assets/lib/assets/wave_400.png": "f89c64b7519e391f5bf6b90797841f8c",
"assets/lib/assets/shapes_500.png": "2e2e0303f451ef3682f72c8c779a3a5f",
"assets/lib/assets/wallpaper_100.png": "81543ad74f9d8d3d15301b846ea56f46",
"assets/lib/assets/riley_200.png": "3af5461d0c902dd10dd3315bbde5d38b",
"assets/lib/assets/fibonacci_200.png": "6c24d7aa263f9c186e62581f53c3defa",
"assets/lib/assets/icon_2020.png": "c14de819540aa3b19e2ac9c5187cf85b",
"assets/lib/assets/wallpaper_300.png": "69c16f748855c2e8af7667490deb78ae",
"assets/lib/assets/quads_500.png": "5e2addf0812c02315545bd1ce0953387",
"assets/lib/assets/wave_200.png": "cb9cc1e48109b9ed4af9a503d5dfcfe4",
"assets/lib/assets/maze_150.png": "ce15cbb5e119c2c7541aae43eec551f1",
"assets/lib/assets/tree_75.png": "5a9b005d9354913d2003ffdb210bf56b",
"assets/lib/assets/riley_400.png": "d2aea38225a6e8e24d6ebf55469c74fe",
"assets/lib/assets/quads_100.png": "7930ca436eb56704a1a85f946741e20d",
"assets/lib/assets/shapes_300.png": "3a860d8f378af334466c4a8fe5ed743a",
"assets/lib/assets/quads_300.png": "e46fe57ecbd86ae944f0ba87fae832e4",
"assets/lib/assets/wallpaper_500.png": "1ac65c5051a3ade8d98996372b162e69",
"assets/lib/assets/shapes_100.png": "e284ab80d6379cd2930a6eb21a3ef969",
"assets/lib/assets/fibonacci_400.png": "de6ae5aebb0110d9aa472aeae598b18f",
"assets/lib/assets/diagonal_150.png": "5102e01465306fd7176eb4a1c55b488a",
"assets/lib/assets/neighbour_100.png": "8278619e06d02203edba9de90ceeff3c",
"assets/lib/assets/OpArtLab.zip": "365b1c7a0b2fbf996acade6039c5cbf7",
"assets/lib/assets/maze_200.png": "9a6e5dd470886a886c6a79f2d2e73b7c",
"assets/lib/assets/hexagons_500.png": "1f2f4221f60e3f78bdc3527b98806863",
"assets/lib/assets/wave_150.png": "2767a8b0a4fc474be239de30a4725d1a",
"assets/lib/assets/squares_300.png": "5ab9446bb69d732272405c2874aaffae",
"assets/lib/assets/tree_500.png": "49700ad93e50f6783f83a042833e30b9",
"assets/lib/assets/wallpaper_75.png": "92a6a9f1b106d972f3244f838a17dacc",
"assets/lib/assets/diagonal_200.png": "2db643663abe9bdd17a7298a50f28421",
"assets/lib/assets/squares_100.png": "d2ea02bd38bc420cc1dc5676160893a6",
"assets/lib/assets/fibonacci.png": "6ad3019edbf1d19349028a6fe6b98f17",
"assets/lib/assets/neighbour_300.png": "40fe0c5ccf48414d237538922a7d1a26",
"assets/lib/assets/icon_512.png": "bb22941cf2dc3012f3ccc99319e6f0ec",
"assets/lib/assets/riley_150.png": "c50d89cbb62bc7b73d2be755475f028f",
"assets/lib/assets/tree_100.png": "a1e1f7ed61a9c0bb8f68710cb42dbe75",
"assets/lib/assets/squares_500.png": "5d9d1209dfd407812de118ceee35195c",
"assets/lib/assets/maze_400.png": "6823bf959afcd31e73c54d2867c773d5",
"assets/lib/assets/hexagons_300.png": "51557b1204cdca7e5f04f89014c07a8a",
"assets/lib/assets/diagonal_400.png": "e94a122a29252c37d94cb76865bc659a",
"assets/lib/assets/hexagons_100.png": "07b00fda1868ed313a6380a9226f0c9f",
"assets/lib/assets/tree_300.png": "2ba5001ed628337f3d93550ea4d93b9d",
"assets/lib/assets/fibonacci_150.png": "98143a1604655ef0d7545ac5834f20c6",
"assets/lib/assets/waves.png": "4c1b48285ab9a8b24e4668bbe401d6e3",
"assets/lib/assets/riley_75.png": "1631367742ec7816900fdbfcca243c42",
"assets/lib/assets/icon_1024x500.png": "f2e30d7f7b2d8d04a6b79df89d98ee47",
"assets/lib/assets/neighbour_500.png": "56a9f5c4e502d52b89cdc5d2eaabdf7b",
"assets/lib/assets/diagonal_300.png": "37575bb4acd020a1e104603c07bbab46",
"assets/lib/assets/maze_100.png": "a297ae383007ba7d6743cbe96bf08a1a",
"assets/lib/assets/tree_400.png": "4669c255eec7004cd3a2c45922722b80",
"assets/lib/assets/quads_150.png": "6a06887182aec0c5c5ba632ab4c66e5a",
"assets/lib/assets/neighbour_200.png": "f98d8187aedf186b8493e1f89f86c1b4",
"assets/lib/assets/shapes_150.png": "658383b2e438e2f1c8d37cda5f62f3c2",
"assets/lib/assets/shapes_75.png": "44e71ebf1a8dd974a8a31545df5ace5a",
"assets/lib/assets/squares_75.png": "f22074d7c59cbb080b35d4dbd9f34444",
"assets/lib/assets/squares_200.png": "f758432174925feae63d2b3c8eb13b09",
"assets/lib/assets/maze_300.png": "dd4519f9667a9145a3b9c6ec303b7300",
"assets/lib/assets/diagonal_100.png": "ffe52087baf3d39cbef0732a585e5e30",
"assets/lib/assets/hexagons_400.png": "2db0b15efe3b9b09b46d4160408110fe",
"assets/lib/assets/tree_200.png": "e5ccdd947bd7287737a2778ef8568b1d",
"assets/lib/assets/trees.png": "fd00b1afa2728e98517437fdff33f43d",
"assets/lib/assets/diagonal_500.png": "51147fcddae498a6e2635a1184bb8222",
"assets/lib/assets/neighbour_400.png": "b5e4fde0776e1e4b57f13ce1b9870112",
"assets/lib/assets/wallpaper_150.png": "0ebbd7cf8b5352e58234d5037345b38d",
"assets/lib/assets/neighbour_75.png": "4934bbde58d865d3426357e1f3330711",
"assets/lib/assets/shapes_750.png": "233f9592a3af11f7971b99e191a011fb",
"assets/lib/assets/quads_75.png": "944f8d4aa62288707669267f1c3eb42e",
"assets/lib/assets/maze_500.png": "859820e269a1c953aaadde1adc81d340",
"assets/lib/assets/hexagons_200.png": "73f847ee77a6fc8e52da175d0bf7911f",
"assets/lib/assets/squares_400.png": "3d48b6a631a40e56b96e389ad81f58dd",
"assets/lib/assets/hexagons_75.png": "02f0e7bd890ef904a4237f7f2a68324d",
"assets/fonts/Lobster_Two/LobsterTwo-Bold.ttf": "a39e5778312a715a82d7afe88ebac015",
"assets/fonts/Lobster_Two/LobsterTwo-Regular.ttf": "fb8c29136b1ee99fe9dd45a6f8bcc9fd",
"assets/fonts/Righteous/Righteous-Regular.ttf": "77fa00996ecb4104c7880b8749c7c4e0",
"assets/fonts/OpArtLab.ttf": "72fd259663b855b458b328dd40d21ec1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Monoton/Monoton-Regular.ttf": "411051cb61bcda5517943601e8734cea"
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
  self.skipWaiting();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
