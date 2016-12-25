myapp.filter('convert', function(){
    return function(val , prefix){         
        return prefix + "_" + val;
    };
})