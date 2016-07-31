module a {
    export class A2 {
        // Properties
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        public getName() {
            return this.name;
        }
    }
}