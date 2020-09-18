'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6146ba52e8809b77d19a32f8014cb76b",
"/": "6146ba52e8809b77d19a32f8014cb76b",
"main.dart.js": "8290b1baec9eae1d602851b1b37dfc40",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b110e8b9637d1e7a6d6c04b603e6c881",
"assets/AssetManifest.json": "2b5b948aeededcc76923b2abb352d5b3",
"assets/NOTICES": "eb521f0253198f7a5f51f9847cd1567f",
"assets/FontManifest.json": "2ad605dbe1c1685b6136ab81b01f1279",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/CustomIcon.ttf": "86979367c8961fe7ed65d0c9e4cf1fc0",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/audios/tulip_tree.mp3": "c6163c0a9da40267bb2eece3f1516ea6",
"assets/assets/audios/scarlet_hawthorn.mp3": "0decfbee2007ac5b8e5043cb54f690c9",
"assets/assets/audios/introduction.mp3": "60bc37e395fa0784f325f06d4a2f86bb",
"assets/assets/audios/cherry_plum.mp3": "f718333557522a9dac3f8fc7050209e7",
"assets/assets/audios/horse_chestnut.mp3": "7e7e1d147029478bf1a39ebf81f801d6",
"assets/assets/audios/bird_cherry.mp3": "684118803afc7831f7c5223f03567bb7",
"assets/assets/audios/cherry.mp3": "569740529711090beb8edc5f63d6633c",
"assets/assets/audios/silver_birch.mp3": "5acec5e1833b01161bfb0ba5e61abbb3",
"assets/assets/audios/apple.mp3": "68f7259ab466bbd3db3bf80b51d89e43",
"assets/assets/audios/oak.mp3": "b6542534eca005e8dbe29f481c1c85a1",
"assets/assets/audios/silver_maple.mp3": "5b933f333e6f135eeec7492de958a4f0",
"assets/assets/audios/yew.mp3": "315411334c30a1f8009267ad2fa48bab",
"assets/assets/audios/cypress.mp3": "971b2748ecbb6b3e8f3321bb4d77e43d",
"assets/assets/audios/small_leaf_lime.mp3": "db03a20c13d8b881a6595b748243ce2b",
"assets/assets/audios/norway_maple.mp3": "945e1e17be82ee89fe9e80d6dfbf0ab9",
"assets/assets/audios/hornbeam.mp3": "a69d4e20b6f93f1cc8c6a9e7fc5e86a4",
"assets/assets/audios/rowan.mp3": "ca4884c64558d54d5db5571eac1cac95",
"assets/assets/audios/hawthorn.mp3": "efc8eb97847a63c486cff719012f5da5",
"assets/assets/audios/sycamore.mp3": "a94f2c7147f1add32ff7eb92a4b5bb80",
"assets/assets/audios/london_plane.mp3": "ebdd3703105a6b75d5427ee183fa3a19",
"assets/assets/audios/ash.mp3": "a8b12e445b95285cc61acca0d289a32e",
"assets/assets/images/cypress_leaf.jpg": "b15301533543a5a0c18ed89d7cd70dd7",
"assets/assets/images/sycamore_tree.jpg": "7b450f7e862731b042d8165ff05659fd",
"assets/assets/images/tulip_tree_1.jpeg": "aca9978502fbad3f50557f016b1621b1",
"assets/assets/images/feature_graphic_BP.png": "526f7845a7e390cc81658079e6e0a74c",
"assets/assets/images/background_photo.jpg": "a748bca0f6920670245a2d52033a4d26",
"assets/assets/images/hawthorn_leaf.jpg": "b9923767b3958761330f68a76ddc1b4a",
"assets/assets/images/apple_tree.jpg": "0e986d4e77616120270ec7719574e94e",
"assets/assets/images/ash_tree.jpg": "4894358f7878fa6584f01817ded35227",
"assets/assets/images/london_plane_leaf.jpg": "f23b506be75629ca698ac04d4cf95e81",
"assets/assets/images/silver_maple_tree_extra.jpg": "6131c69be111821de7d49c0e2d2e67e4",
"assets/assets/images/logo-1024.png": "938b4bc842784df2c9d024192402cf61",
"assets/assets/images/ash_logo.png": "1f6e7b52acfedf42dc68a74fcaafe370",
"assets/assets/images/leaves_landscape.jpeg": "1126d4d72f9e8316dbae45342d6d8456",
"assets/assets/images/oak_tree.jpg": "6a0fc287bd92290fa3b60d2d8859d1b2",
"assets/assets/images/yew_tree.jpg": "7d71037a945eb785558eeb5704d63a9a",
"assets/assets/images/rg_feature_graphic.png": "1e3ded78c1a4ca22bc1dc8c855fc27ae",
"assets/assets/images/silver_maple_tree.jpg": "4ece851e3f8c286fb37006334dab6ec1",
"assets/assets/images/silver_maple_bench.jpg": "a2cb02a2575ff70011bbd3f0e92fd424",
"assets/assets/images/silver_maple_leaf.jpg": "eb1232a21e71404144beed69613bd7ca",
"assets/assets/images/yew_leaf.jpg": "8bfb42422b2ad538b8135b534b9ee8c3",
"assets/assets/images/oak_leaf.jpg": "14329e33b1e1361b149625b7edb3207f",
"assets/assets/images/map.png": "3a704328b25dfcf67aed3cfebe944d5f",
"assets/assets/images/cherry_bark.jpg": "81b45cbb295fd807bce7886ddb8cf66b",
"assets/assets/images/map.pdf": "b5bf385e6c665745bb11ca074a2efa53",
"assets/assets/images/london_plane_tree.jpg": "03d315f2808f078daff1cd1b594be584",
"assets/assets/images/ash_leaf.jpg": "18ac690d90de720e638c8c21e84f9647",
"assets/assets/images/redland_green.jpg": "f3dea9255e5fb552923083a4abdf72d8",
"assets/assets/images/apple_leaf.jpg": "d6224f1bc36b90dad787a0fa248239a3",
"assets/assets/images/london_planes_redland_green_road.jpg": "d56bce9b7102b8a3b8b0e8ea7c02d166",
"assets/assets/images/hawthorn_tree.jpg": "0811dca211b8392a388969a00a8ea27e",
"assets/assets/images/small_oak.jpg": "c530a55553ea14a3cf0ac6835f3d4406",
"assets/assets/images/sycamore_leaf.jpg": "1846f5411466bcf0d290be63d70bf202",
"assets/assets/images/silver_birch_bark.jpg": "568fe86be2fa2765721cfe37448295df",
"assets/assets/images/cypress_tree.jpg": "c53de5524a52ebbac76a0176cae883d2",
"assets/assets/images/cherry_tree.jpg": "850bc2120419c48a534aeffce5fdcc47",
"assets/assets/images/ash_logo_black_and_white.svg": "f504a7b064472031fd90ead20facff93",
"assets/assets/images/cherry_plum_leaf.jpg": "3d6eaac1a6e5c80c337c504aaed32948",
"assets/assets/images/leaves.jpeg": "7c42e228329fe0d2641c31787216f14b",
"assets/assets/images/scarlet_hawthorn_tree.jpg": "481839819545efa208664d04085bad3e",
"assets/assets/images/bird_cherry_leaf.jpg": "281a67b6306d518215c3732bf2f65666",
"assets/assets/images/logo2.png": "7e3e8dcea1264d3bbd9d27c820a9733d",
"assets/assets/images/norway_maple_tree.jpg": "4cd7356a02d6cbaab7bbd470603b860d",
"assets/assets/images/lime_tree.jpg": "8ebfd025a9d8622a91339804f4b8187e",
"assets/assets/images/mountain_ash_tree.jpg": "77c53b4d4cff1444d5d7f85cce3ae7ad",
"assets/assets/images/cypress_bark.jpg": "5d0f712ccf5f51897beaa6b178c8e27a",
"assets/assets/images/horse_chestnut_blossom.jpg": "48e1ebf33fcd8d7a827dac8179c3c216",
"assets/assets/images/silver_birch_tree.jpg": "30af398e1047e4cbd444984bc1b4322c",
"assets/assets/images/tulip_tree_leaf.jpg": "4a2252a7114b32864bf61b4b5defa50c",
"assets/assets/images/hornbeam_leaf.jpg": "461d5d259a7a60c96dcb46484d937e4d",
"assets/assets/images/horse_chestnut_tree.jpg": "9435e465a033949121e0f4b81b9e5dc9",
"assets/assets/images/london_plane_bark.jpg": "6e9650bedf0963f431b396693c470ace",
"assets/assets/images/mountain_ash_blossom.jpg": "c0dab8dec4f4c9a5a2d917f01e23b2d4",
"assets/assets/images/cherry_blossom.jpg": "87f0cdd16fb44c61d3af587edce5048e",
"assets/assets/images/ash_bark.jpg": "a285434a255a3183f3c8fd917f31cba2",
"assets/assets/images/horse_chestnut_leaf.jpg": "6944c21095b77c8732d4b10c476c620e",
"assets/assets/images/hornbeam_tree.jpg": "5f8359def7b98ac62691f62c1180b3d0",
"assets/assets/images/tulip_tree.jpg": "62d4a78fe795223b0ca963e9b8c6b16d",
"assets/assets/images/cherry_plum_1.jpg": "ac32c6391e902768e5fcaa4f6a7fbf2c",
"assets/assets/images/silver_birch_leaf.jpg": "caf2f45f665cbbc8bf97bc14a98fe0c2",
"assets/assets/images/mountain_ash_leaf.jpg": "6ca6e899c984434f8dc5edf61234bbee",
"assets/assets/images/lime_leaf.jpg": "d644844998254ef1edda8798f0859f7a",
"assets/assets/images/hawthorn_blossom.jpg": "3d77055e5fc9ecab0c3ab00974e6528f",
"assets/assets/images/norway_maple_leaf.jpg": "6b9e6f64cab9b0aec54af9a0e0ad1473",
"assets/assets/images/beech_leaf.jpg": "d8e96230d3e6593ee12ac7e81f03895a",
"assets/assets/images/bird_cherry_tree.jpg": "98660bc936f6cf65280621bba506395d",
"assets/assets/images/yew_bark.jpg": "b9f2f4a871a2f7caa455d76ef79bb65c",
"assets/assets/images/scarlet_hawthorn_leaf.jpg": "09c6f58ba434f86348da03113f70fae2",
"assets/assets/images/cherry_plum_tree.jpg": "ac32c6391e902768e5fcaa4f6a7fbf2c",
"assets/assets/images/start.png": "aa8c5668314757f5b56f5cb76bfb1d1d",
"assets/assets/images/scarlet_hawthorn_blossom.jpg": "cddab6a943a23ac72aba1fdcf7508d87",
"assets/assets/images/tulip_tree_2.jpeg": "1581faeaaa424dcd4623752fa5e0ac01",
"assets/assets/images/logobp_ios.png": "7e3e8dcea1264d3bbd9d27c820a9733d",
"assets/assets/images/cherry_leaf.jpg": "31ff8f4e870c4cd6d7adef544a69c103"
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
