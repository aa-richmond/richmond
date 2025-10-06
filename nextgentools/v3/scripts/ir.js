//let scriptTag = document.getElementById('ir-script')
var version="v3"
var baseUrl = 'https://assets.investisdigital.com/';

    const scripts = [
        {
            "src": `${baseUrl}nextgentools/${version}/build/tools-2-0.esm.js`,
            "type": "module",
            "nomodule": false
        },
        {
            "src": `${baseUrl}nextgentools/${version}/build/tools-2-0.js`,
            "type": "text/javascript",
            "nomodule": true
        }
        ,
        {
            "src": `${baseUrl}nextgentools/${version}/atomic_core_scripts/tabs.js`,
            "type": "text/javascript",
            "nomodule": false
        },
		{
            "src": `${baseUrl}nextgentools/${version}/atomic_core_scripts/alert.js`,
            "type": "text/javascript",
            "nomodule": false
        },
        {
            "src": `${baseUrl}nextgentools/${version}/atomic_core_scripts/accordion.js`,
            "type": "text/javascript",
            "nomodule": false
        },
        {
            "src": `${baseUrl}nextgentools/${version}/scripts/translation.js`,
            "type": "text/javascript",
            "nomodule": false
        },
    ];

    for (let index = 0; index < scripts.length; ++index) {
        let script = document.createElement('script');
        script.src = scripts[index].src;
        script.type = scripts[index].type;
        script.noModule = scripts[index].nomodule;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    setTimeout(function () {
        const toolDivTag = document.getElementsByClassName('invd-container');

         for (let index = 0; index < toolDivTag.length; ++index) {
          
            var clientID = toolDivTag[index].getAttribute("data-client");
            var configID = toolDivTag[index].getAttribute("data-config");
            //var isActive = toolDivTag[index].getAttribute("data-active");
			var path = toolDivTag[index].getAttribute("data-path");
            let newScript = document.createElement('script');
            if(clientID && configID){
                newScript.type = 'text/javascript';  
                newScript.src = `${baseUrl}native-tools/${path}/${clientID}/${configID}.js`;  
                document.getElementsByTagName("body")[0].appendChild(newScript);
            }
        }
        
    }, 500);
