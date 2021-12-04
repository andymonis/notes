
class Route {
    constructor(){
        this._paths = {};

        this._current = ko.observable("<page-home></page-home>")
    }

    get current(){
        return this._current;
    }

    /**
     * 
     * @param {*} path 
     * @param {*} component 
     */
    add(path,component){
        this._paths[path] = component
    }

    route(path){
        let tags = this._paths[path];
        
        // if(tags!==undefined){
        //     let el = document.querySelector("router");
        //     let comp = document.createElement("page-home");
        //     el.appendChild(comp);
        //     // this._current(tags);
        // }
    }
}

export default new Route()