'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f4c630e84d12cc25ea262c6e77933ed8",
"splash/img/light-2x.png": "9faffb842f427cb8fc60d27f31b22fa5",
"splash/img/dark-4x.png": "ac90d6cc9dd91ec3408fb56af967b7cc",
"splash/img/light-3x.png": "f9a819e559567c34a2ddbce201a105fd",
"splash/img/dark-3x.png": "f9a819e559567c34a2ddbce201a105fd",
"splash/img/light-4x.png": "ac90d6cc9dd91ec3408fb56af967b7cc",
"splash/img/dark-2x.png": "9faffb842f427cb8fc60d27f31b22fa5",
"splash/img/dark-1x.png": "122d01df34c0c8faec0d18cfd9ed8208",
"splash/img/light-1x.png": "122d01df34c0c8faec0d18cfd9ed8208",
"splash/style.css": "d4198f3312b6f480da2da5610d5043e5",
"favicon.ico": "885b94a6d252835e6ce789363b995742",
"index.html": "2b306d110197e3c5a5419c68eb111e71",
"/": "2b306d110197e3c5a5419c68eb111e71",
"main.dart.js": "7bc3e5623eaed84ee15ea39db6b518ba",
"README.md": "c274c78161fc0526b4ade2f8ead85104",
"icons/favicon-16x16.png": "79346b65fda5617017465498cd2c4d14",
"icons/apple-icon.png": "12db5e6dc9fd275e434988b4b71e2bc3",
"icons/apple-icon-144x144.png": "7f6bd3104978147763f1ba0242ec2df2",
"icons/android-icon-192x192.png": "1d274b151c7322e654b5f7be27176dc1",
"icons/apple-icon-precomposed.png": "12db5e6dc9fd275e434988b4b71e2bc3",
"icons/apple-icon-114x114.png": "8e451fee4bba9ae4a82b17f9007bdcb6",
"icons/ms-icon-310x310.png": "53a83c35fbff17619a6ec73b706fa8a6",
"icons/ms-icon-144x144.png": "7f6bd3104978147763f1ba0242ec2df2",
"icons/apple-icon-57x57.png": "8a16e62f0fc811e1edcb43fc258693dd",
"icons/apple-icon-152x152.png": "78c383aa017203945a399cd433fea854",
"icons/ms-icon-150x150.png": "2317ef166e60b4e633f842199c8bd08d",
"icons/android-icon-72x72.png": "ee2927c88c9479ca1ffc0fa5426cdbdf",
"icons/android-icon-96x96.png": "41aaf982be0794838f2b4e1e726534f3",
"icons/android-icon-36x36.png": "e23cac7982d329bc32e4671be8f793ee",
"icons/apple-icon-180x180.png": "95a7df3d769dfb863acd3e2f1e401530",
"icons/favicon-96x96.png": "41aaf982be0794838f2b4e1e726534f3",
"icons/android-icon-48x48.png": "2836bf10e4e7eb9fd5d0f2f755de6cd3",
"icons/apple-icon-76x76.png": "c61b15d06a20d4da0f099b0f1ad715c2",
"icons/apple-icon-60x60.png": "27b8d1b87b0c8c4bf37fa3c3efcd6e42",
"icons/android-icon-144x144.png": "7f6bd3104978147763f1ba0242ec2df2",
"icons/apple-icon-72x72.png": "ee2927c88c9479ca1ffc0fa5426cdbdf",
"icons/apple-icon-120x120.png": "4136c59dd9241e05935851bb3db357bd",
"icons/favicon-32x32.png": "c6080c71970f1ed3cb0bfeaaef571837",
"icons/ms-icon-70x70.png": "f6a6d52fe5dd2e809a0cc56494a5179c",
"manifest.json": "1159cc626a05b1dfc6183556cf066f42",
".git/config": "a5010a2bcf81d2325a5de195e727b186",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/60/b8bb9582d339b036ac8c02adcfa7f44b493970": "5b6780892c529010f12f79856882fbec",
".git/objects/02/f683d0872cd74364fe8ae8bd545d939ba01d7d": "cb288fcffae89432475aabd6039652c1",
".git/objects/d0/6cbc8191566dfdd830dbb21eec5be326f4be01": "43cc0889033c33d56e1530a5ae12c7e2",
".git/objects/d1/7475c09b2df457f4e240e4b54e350314263eb4": "9d4c5ab309ba190ba679c8e50b3c8f35",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/42465253643013cdd98b4eca9c4bbf6e80ae26": "bff2c37a2b79717f2d90c07e31f1b40b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c8/7a2737e922ae25665f40fb12332eb2765e7b6f": "d2d18f81c1d138f6aed68825a545d5f7",
".git/objects/45/e340003fd1fd6a39fe550b295fdd1b17881903": "6045e2cd79bd51bb411584445d32cc3b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/28ab2a45a7a631ce3dbe570481b4a7ecfc2c0a": "9d5346973a9b79d05dfb765c729d0a24",
".git/objects/72/1f28ff5f9bf2c79cb91ad1170e524437e3b5a8": "aefee5ca2c307e4b4c2e23ae34544d69",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/54/b952035b00f7a1a382763786635757706af757": "f9cb6e78fd7ec128262bfc84fe5228e1",
".git/objects/6c/9d5bcb6b804e3ed361c2bbe336cb92cab70120": "1a8a5e0bcbd4a6aa7dc112d21dc0247b",
".git/objects/d3/b9c94ff5905a9c728c45b7d511b5d202afcaae": "e4366707db93c78e40905c288a97125f",
".git/objects/aa/ec5ebca58daff203643e11498029c19db1bf67": "c6755449a5b12fb62a8dcaa7e3a996d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/292ad2bad5fc50311a3ac33fc77664c4c100ba": "29f8bae44b91726a3be8af7fa3932906",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/4ca455942745bb221a4844beeb2db8b847fe58": "ee9a2a6397a7518b9c1a78eed29dcb54",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d92fe2a9dd59fed735fd77505d09a0c",
".git/logs/refs/heads/master": "4d92fe2a9dd59fed735fd77505d09a0c",
".git/logs/refs/remotes/origin/master": "e552979e40c1eaa111e1b61334393727",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "53b725dd24898b062016e671385f66f5",
".git/refs/remotes/origin/master": "53b725dd24898b062016e671385f66f5",
".git/index": "e2c4c183950369e108b2603daeff2af8",
".git/COMMIT_EDITMSG": "fd58c626645b74edda4b6fdc551f2eee",
"assets/AssetManifest.json": "fc5c3b42ca86a9f26b2854af4e8be026",
"assets/NOTICES": "e58920b208f0816b4a7c2ea0e3d10279",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/splash.png": "cfe3c8c4a94f35f300f9442415eb99f1",
"assets/assets/BST-logo.png": "9aeb74c370304e2d6b2d24726389e8ee"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
