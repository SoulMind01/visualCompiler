import { loadTextFromFile } from "../../assets/js/utils/textLoader.js";

describe("test suite: loadTextFromFile(url)", () =>
{
  it("loads all text from a text file", async () =>
  {
    const text = await loadTextFromFile(textFileDirectory);
    expect(text).toBe("This is a text file for the purpose of test.");
  });
  let textFileDirectory = "textLoader/textFile.txt";
  it("throws an error if the file does not exist", async () =>
  {
    try
    {
      await loadTextFromFile("nonexistentFile.txt");
    }
    catch (error)
    {
      expect(error.message).toBe("The file does not exist.");
    }
  }
  );
  it("throws an error if the `url` argument is not a string", async () =>
  {
    let a = {
      a: "123",
      b: "456"
    };
    try
    {
      await loadTextFromFile(a);
    }
    catch (error)
    {
      expect(error.message).toBe("Invalid argument: url must be a string");
    }
  }
  );
  it("throws an error if the `url` argument is an empty string", async () =>
  {
    try
    {
      await loadTextFromFile("");
    }
    catch (error)
    {
      expect(error.message).toBe("Invalid argument: url must not be empty");
    }
  }
  );
});