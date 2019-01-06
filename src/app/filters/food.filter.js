angular
    .module('app')
    .filter('foodfilter', function() {

   return function( items, condition) {
    let filtered = [];

    if(condition === undefined || condition === '' || condition === 0){
      return items;
    }
    
    if(condition === 1){
      items.forEach((item)=>{
        if(item.veg === true)
          filtered.push(item)
      })
    }
    else if(condition === 2){
      items.forEach((item)=>{
        if(item.veg === false)
          filtered.push(item)
      })
    }
    else if(condition === 3){
      filtered = items.sort((a,b)=>{
        return b.rating - a.rating
      })
    }
 
    return filtered;
  };
});