"use strict";
// 37. Large Shirts:
// Modify the make_shirt() function so that shirts are large by default, with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
(function (medium_size = 10, large_size = 20, message = "I Love Typescript") {
    console.log(`Shirt size meadium ${medium_size} `);
    console.log(`Shirt large size ${large_size} finally ${message}`);
})();
