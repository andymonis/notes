let context = {
    name: ko.observable("notes"),
    route: ko.observable("") 
}

let listeners = {};

let $get = function(ns,model){
    let prop = undefined;
    model = model || context;
    if(ns.length>0){
        let sub = ns.shift();
        return $get(ns,model[sub]);
    } else {
        return model;
    }
}

let action = function(ns,data){
    // Split NS into array of parts
    let parts = ns.split(".");
    // Get the observable
    let prop = $get(parts);
    // Set the data
    prop(data);
    // Notify changes
    notify(ns,context,data);
}

let notify = function(ns,context,data){
    let _listeners = listeners[ns] || [];
    for(let i=0;i<_listeners.length;i++){
        _listeners[i](ns,context,data);
    }
}

let on = function(ns,fn){
    listeners[ns] = listeners[ns] || [];
    listeners[ns].push(fn);
}

let route = function(name){
    action("route", name)
}

export default {
    context,
    action,
    on,
    route
};