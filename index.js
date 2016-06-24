/* jshint esnext: true */
import $script from 'scriptjs';

function loadJS(url){
  return new Promise(function(resolve){
    $script(url, resolve);
  });
}

export {loadJS};
