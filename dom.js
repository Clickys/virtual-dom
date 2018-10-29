function eachElement(element, obj = {}, j = 0, elementName = element.nodeName) {

    if (obj[elementName]) {
        obj[element.nodeName + '-' + j] = {};
        elementName = element.nodeName + '-' + j;
        j++;
    } else {
        obj[element.nodeName] = {};
        elementName = element.nodeName;
    }
    // Recursive case:
    if (element.children.length) {
        for(let i = 0; i < element.children.length; i++) {
            eachElement(element.children[i], obj[elementName]);
        }
    } else {
    // Base Case:
        return;
    }
    return obj;
}
