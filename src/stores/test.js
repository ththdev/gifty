import { observable, action } from 'mobx'

export default class TestStrore {
    @observable username = "Kevin"

    constructor(root) {
        this.root = root;
    }
}