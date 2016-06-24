/* jshint esnext: true */
import $script from 'scriptjs';

function loadJSOfOtherDomain(url){
  return new Promise(function(resolve){
    $script(url, resolve);
  });
}

function loadJSOfThisDomain(moduleName){
  return new Promise(function(resolve){
    require.ensure([moduleName], function(){
      resolve(require(moduleName));
    });
  });
}

export {loadJSOfOtherDomain, loadJSOfThisDomain};
