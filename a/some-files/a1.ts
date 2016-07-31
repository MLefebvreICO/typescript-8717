module a {
    export class A1 {
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