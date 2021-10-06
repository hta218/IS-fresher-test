test1();
// test2();
// test3();
// test4();

// TEST FUNCTIONS
function test1() {
  // Given a string, reverse each word in the sentence
  function reverseString(str) {
    // Your code here

    return "";
  }

  // DO NOT CHANGE
  const string = "Hello world!";
  console.log(reverseString(string)); // Expect: "!dlrow olleH"
}

function test2() {
  // Remove duplicates of an array and return an array of only unique elements
  function removeDuplicate(arr) {
    // Your code here

    return [1, 2, 3];
  }

  // DO NOT CHANGE
  const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
  console.log(removeDuplicate(array)); // Expect: [1, 2, 3, 5, 9, 8]
}

function test3() {
  // DO NOT CHANGE
  const users = [
    { name: "John", hobbies: ["singing", "walking", "playing guitar"] },
    { name: "Terry", hobbies: ["swimming", "playing guitar"] },
    { name: "Anna", hobbies: ["walking", "swimming", "playing guitar"] },
    { name: "Paul", hobbies: ["swimming", "singing"] }
  ];
  //////////////////////////////////////////////////////////////////////

  // Implement a function to count how many users per hobby?
  function usersPerHobby(hobby) {
    // Your code here

    return 0;
  }

  // DO NOT CHANGE
  console.log(usersPerHobby("singing")); // Expect: 2
  console.log(usersPerHobby("swimming")); // Expect: 3
}

function test4() {
  // Implement a function that will get a value
  // from an object by logical path.
  // Return null if no value is there without throwing an exception
  function safeGet(obj, path) {
    // Your code here

    return null;
  }

  // DO NOT CHANGE
  const obj = {
    foo: {
      bar: "baz"
    }
  };

  console.log(safeGet(obj, "foo.bar")); // Expect: 'baz'
  console.log(safeGet(obj, "foo.bar.fu")); // Expect: null
}
