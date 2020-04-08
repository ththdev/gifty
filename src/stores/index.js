import TestStore from './test'

class RootStore {
    constructor() {
        this.test = new TestStore(this);
    }
}

export default RootStore