'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4d637d37b5ef46274393899205774420",
".git/config": "1c315cbf52dfe53848953b5bd2bbe1e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fd604b013f859dbc54277da7f35ab9b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2afabf84136c677fe9d71d4fc1fa098d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03c48a997910f522886390314fd2954b",
".git/logs/refs/heads/main": "b6f57e887cce14450cb8464e4910dd53",
".git/logs/refs/remotes/origin/main": "a45f423c7886533865062c8e18b59271",
".git/objects/11/931391276dfc65c8514376b54907770ee3cb31": "324aeabe97f0710b5d24d943811504d6",
".git/objects/12/6bb11000dc16a693ff94eff3a193017bf4c2f9": "daaaec112e78f5765bc827a4b0c1237c",
".git/objects/16/41c4842ec336482b61b58d1ace509b3f393287": "38b97f5411b925f4f5b15ce286789de4",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1d/1152870e673f0a32ec18f60a1d9dde7da9f181": "f8e5ed18440e0c5e769045ca1c8e1828",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/ed25dd65dac4536f6b8dcd1d84be6c173a4a93": "2cc37c2cf1b4d2aab556d4b33bc705a4",
".git/objects/26/feef88b51088771c5709cb6e39bc155de98523": "3dd73b23719f5d9c43e8cd8b6e3a3d4c",
".git/objects/2e/91ee186325c30054575ed6f6e78704e29dfe51": "63213a5b75413128692dfc7fb2e69032",
".git/objects/33/720bdc64076171236f14e6beff687c2538ff41": "c4efb8150792e2a69e78e5ae14cfb586",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/0fe514a291a5cad4bd67618fa00b5f1f3fce92": "c65d1d288510506e6f4006c4b0cd3fb2",
".git/objects/3e/63c2b4b8d2ac57684ad5176f4bc9a69481af8e": "07256299ff468b5895e81a4700c13243",
".git/objects/47/001cdb1f3223dc171772bd30bbc2a0d46f001c": "08bb7db26cf5814e45dde275a3cfc325",
".git/objects/49/3289aa97254e4b3d9805159177698fbd9d7ad7": "ded98c4ba338bc39a296d881d5a76dfd",
".git/objects/4a/8243a71ae7030c376c2698deda911126bce289": "508a5533d30046604df479c268021bd9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/cfb3185f49e1c7248705f100bad1646dd9a814": "bb4e4d6c06f5f3b07318015b464d1a0b",
".git/objects/53/213649cbd130f8357cd0e20e8ce6055f8c3298": "6e3dcd5e3b7dc894ec58a7872182b6b3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/74/fd0a96d10120da835e6ba5dae361ac6b6ecc8a": "ce33caad8eb1862942977eb96328240f",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/88/95385de959759cb9c850cdb03aa72b0e45eb3a": "725239687997ab48143a4cf886c73245",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/30829cf3b2742272b7cbe48c924f6f56a53a3d": "7b1e463b795087698daed53f6e68d35f",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/92/416af3e9edb1b27ffe59de36e9e91be4698f0f": "bb3695a4b46afd0891259088c99fb439",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a7/e51e32a8f46d7a08bd535e036fd401c0a655ef": "6776e922b558e3b41375316cf7337871",
".git/objects/a9/aec3a96d6a4c323e3fe252ff7b0030a21be860": "392999d23a35e49b203d7f6fb6a1b485",
".git/objects/af/09d9ad0e00871105a07c90d96d4782e590ba9c": "103be7d7f7c57b0a37fbb66cb791fe3e",
".git/objects/b4/12245997c1d3bd19996edc08319a8316229175": "7c16d50e4f0f9f63fe1dc579ae575ac3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3a54588c0d45168ed865f005dacea410296938": "fd4dff778e4327b3d39dec406b3471c2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/9bfce891bf41dff2a593070346112a9f63a05b": "0b220e4d9b8acbfaa78cac634aa1122a",
".git/objects/cb/57f69b110f7682f5a2afc1b83874a5b6ceaf98": "e425084557bfb1f6d119a4b74236e5a6",
".git/objects/cb/5b826ebe09e2b6df447182874f553ef165caf9": "3903bb701d7892891c748db91bcee15e",
".git/objects/cd/5af1844ed2d8354605b27da90183ba52663d25": "8ed02e63b3bf8be94dca796fdf53d6ac",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/58cf289128a80073ec1b592db2ade97d73f884": "595a2a2436e54e049449631eb37c0e07",
".git/objects/dc/5cb866d4dcb05fd9026c43280fd8ff8e9349ff": "d7d24a71e4929322d3e9077a491449e3",
".git/objects/dd/f6951700c043a04357d9b2966487fbb2ba0b63": "00361ee921f7974a053387c494acd458",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/303069cfdc660d1a01f0f64a02ddf481eec63d": "29638bb6ef2f5d4ff6b370ffabe14130",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/be48069611beb4169d40b1c36852614bffacfc": "958b8b1e8d961e32d851f673bea7682d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "a2aad26586b10e443cad60393c64ca27",
".git/refs/heads/main": "a2aad26586b10e443cad60393c64ca27",
".git/refs/remotes/origin/main": "a2aad26586b10e443cad60393c64ca27",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7fc52da546633131bd48cc7bece59b8a",
"assets/NOTICES": "fb61dd2661d9bdb3466bd36244b10e0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4c4d59d048a39934dae39f90bc938bb3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0cb700bdc8502933824c412e0a6cf15",
"/": "b0cb700bdc8502933824c412e0a6cf15",
"main.dart.js": "52097dcea1f74479f81ba1239848e6f0",
"manifest.json": "962537402492f52a8c81faa95f60c06f",
"version.json": "90059b0e3c62ce4b7776b56df75d08b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
