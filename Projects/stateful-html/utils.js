const utils = {
    get: async (endpoint) =>  {
        const req = await fetch(endpoint)
        const res = await req.json()
        console.log({ res })
        return res

    }
}

export default utils