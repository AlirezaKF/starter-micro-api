addEventListener('fetch', event => {
  const request = event.request;
  var url = new URL(request.url);
  url.host = 'ge3.baxter.cf';
  event.respondWith(fetch(url, request));
});
