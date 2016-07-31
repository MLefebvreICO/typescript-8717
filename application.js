var a;
(function (a) {
    var A1 = (function () {
        function A1(name) {
            this.name = name;
        }
        A1.prototype.getName = function () {
            return this.name;
        };
        return A1;
    }());
    a.A1 = A1;
})(a || (a = {}));
var b;
(function (b) {
    var B1 = (function () {
        function B1(name) {
            this.a1 = new a.A1(name);
            this.name = "Foo " + name;
        }
        B1.prototype.getName = function () {
            return this.name;
        };
        B1.prototype.getAllNames = function () {
            console.log(this.getName());
            console.log(this.a1.getName());
        };
        return B1;
    }());
    b.B1 = B1;
})(b || (b = {}));
var b1 = new b.B1('John');
b1.getAllNames();
//# sourceMappingURL=application.js.map