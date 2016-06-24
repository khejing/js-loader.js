/* jshint esnext: true */
import $script from 'scriptjs';

function loadJS(url){
  retur new Promise(function(resolve){
    $script(url, resolve);
  });
}

export {loadJS};
