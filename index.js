/* jshint esnext: true */
import $script from 'scriptjs';

function loadJSOfOtherDomain(url){
  return new Promise(function(resolve){
    $script(url, resolve);
  });
}

function loadJSOfThisDomain(moduleNames){
  return new Promise(function(resolve){
    require.ensure([], function(){
      resolve();
    });
  });
}

export {loadJSOfOtherDomain, loadJSOfThisDomain};
