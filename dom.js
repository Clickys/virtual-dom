(function(counter = 1) {
    function eachElement(element, obj = {}, elementName = element.nodeName) {
        if (obj[elementName]) {
            obj[element.nodeName + '-' + counter] = {};
            elementName = element.nodeName + '-' + counter;
            counter++;
        } else {
            obj[element.nodeName] = {};
            elementName = element.nodeName;
        }
        // Recursive case:
        if (element.children.length) {
            for(let i = 0; i < element.children.length; i++) {
                eachElement(element.children[i], obj[elementName]);
            }
        } else { // Base Case:
            obj[elementName] = element.textContent;
            return;
        }
        return obj;
    }

    window.eachElement = eachElement;
})()