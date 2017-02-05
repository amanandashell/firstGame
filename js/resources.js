(function Resources(win){
  var loaded = [],
      readyCallbacks = [];

  function load(urlOrArr){
    if(urlOrArr instanceof Array){
      urlOrArr.forEach(function(url){
        _load(url);
      });
    } else {
      _load(urlOrArr);
    }
  };

  function _load(url){
    var img = new Image();
    img.onload = function(){
      loaded[url] = img;
      if(_isReady()){
        readyCallbacks.forEach(function(func){ func(); });
      }
    }
    loaded[url] = false
    img.src = url;
  };

  function get(url){
    return loaded[url];
  };

  function _isReady(){
    var ready = true;
    for(k in loaded){
      if(loaded.hasOwnProperty(k) && !loaded[k]) ready = false;
    }
    return ready;
  };

  function onReady(func){
    readyCallbacks.push(func);
  }

  win.Resources = {
    load: load,
    get: get,
    onReady: onReady
  }

})(this.window);
