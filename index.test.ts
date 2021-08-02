import rewire from "rewire";
const index = rewire("./index");
const introduce = index.__get__("introduce");
// @ponicode
describe("introduce", () => {
  test("0", () => {
    let callFunction: any = () => {
      introduce({
        name: "object",
        age: 35,
        isHungry: false,
        hobbies: ["p", "This is a String1", "\"#'{7855663]}ééàà"],
      });
    };

    expect(callFunction).not.toThrow();
  });

  test("1", () => {
    let callFunction: any = () => {
      introduce({
        name: "object",
        age: 18,
        isHungry: true,
        hobbies: ["foo bar", "foo bar", "foo bar"],
      });
    };

    expect(callFunction).not.toThrow();
  });

  test("2", () => {
    let result: any = introduce({
      name: "array",
      age: 75,
      isHungry: true,
      hobbies: [123456789, "This is a String1", "foo bar", 123456789],
    });
    expect(result).toBe(undefined);
  });

  test("3", () => {
    let result: any = introduce({
      name: "string",
      age: 5,
      isHungry: false,
      hobbies: [
        "p",
        "\"#'{7855663]}ééàà",
        "This is a String1",
        "This is a String1",
        "\"#'{7855663]}ééàà",
      ],
    });
    expect(result).toBe(undefined);
  });

  test("4", () => {
    let callFunction: any = () => {
      introduce({
        name: "array",
        age: 18,
        isHungry: true,
        hobbies: [123456789],
      });
    };

    expect(callFunction).not.toThrow();
  });

  test("5", () => {
    let callFunction: any = () => {
      introduce({ name: "", age: Infinity, isHungry: true, hobbies: [] });
    };

    expect(callFunction).not.toThrow();
  });
});
