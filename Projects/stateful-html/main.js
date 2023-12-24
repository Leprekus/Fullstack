const utils = {
    get: async (node, endpoint) =>  {
        
        console.log({node})
        node.innerHTML = "Loading..."
        const req = await fetch('http://127.0.0.1:8125' + endpoint)
        const res = await req.text()
        console.log({res})
        node.innerHTML = res;

    }
}

function* idGenerator() {
    let id = 0;
    while (true) {
        yield id;
        id++;
    }
}
////////////////////////////////////////////////////////
const id = idGenerator();
const DomTree = document.getElementsByTagName('*');


const VERBS = ['put', 'patch', 'get', 'post', 'del']
const IDENTIFIERS = {

    //RESERVED
    ID: 't-id',

    //TAG
    TAG: 't-watch',

    //MUTABLES
    VAR: 't-var',

    //POINTERS
    PAYLOAD: 't-payload',
    TARGET: 't-target',

    //METHODS
    PUT: 't-put',
    GET: 't-get',
    POST: 't-post',
    PATCH: 't-patch',
    DEL: 't-del',
}

const observing = []

////////////////////////////////////////////////////////

const transform = (node, attribute) => {
    
    switch(attribute.nodeName) {
        case IDENTIFIERS.ID:

        break;
        case IDENTIFIERS.TAG:

        break;
        case IDENTIFIERS.VAR:

        break;

        case IDENTIFIERS.PAYLOAD:
        break;

        case IDENTIFIERS.PUT:
        break;

        case IDENTIFIERS.GET:
            utils.get(node, attribute.nodeValue)
        break;

        case IDENTIFIERS.POST:
        break;

        case IDENTIFIERS.PATCH:
        break;

        case IDENTIFIERS.DEL:
        break;
    }
}
for (let node of DomTree) {
    if(node.attributes['t-watch']){

        node.setAttribute('t-id', id.next().value)
        observing.push(node)
        for(let attribute of node.attributes)
        if(attribute.nodeName.match('t-'))
            transform(node, attribute)
    }
}

// for(let node of observing) {
   
//     for(let identifier of node.identifiers){
//         console.log(node.attributes)

//         }
// }

console.log(observing, (observing[0].attributes[0]))
