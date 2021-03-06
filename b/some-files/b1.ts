module b {
    export class B1 {
        private name: string;
        private a1: a.A1;

        constructor(name: string) {
            this.a1 = new a.A1(name);
            this.name = `Foo ${name}`;
        }

        public getName() {
            return this.name;
        }

        public getAllNames() {
            console.log(this.getName());
            console.log(this.a1.getName());
        }
    }
}