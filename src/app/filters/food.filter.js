angular
    .module('app')
    .filter('foodfilter', function() {

   return function( items, condition) {
    let filtered = [];

    if(condition === undefined || condition === ''){
      return items;
    }

    if(condition === 0){
      filtered = items.sort((a,b)=>{
        return a.id - b.id
      })
    }
    else if(condition === 1){
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