class Registry {
    constructor(components = {}) {
        this.components = components;
    }

    get = id => {
        return this.components[id] || null;
    };
}

export default Registry;
