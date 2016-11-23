var profile = (function(){

    return {
        basePath: ".",
        releaseDir: "./built",
        action: "release",
		copyTests: false,
        optimize: 'closure.keeplines',
        layerOptimize: 'closure.keeplines',
        cssOptimize: 'comments',
        optimizeOptions: {

        },

        packages:[{
            name: "dojo",
            location: "dojo"
        }, {
            name: 'dijit',
            location: 'dijit'
        }]
    };
})();