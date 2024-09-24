export async function loadTextFromFile(url)
{

  if (typeof url !== "string")
  {
    throw new Error("Invalid argument: url must be a string");
  }
  else if (url === "")  
  {
    throw new Error("Invalid argument: url must not be empty");
  }

  let response = await fetch(url);
  if (!response.ok)
  {
    if (response.status === 404)
    {
      throw new Error("The file does not exist.");
    }
    else
    {
      throw new Error("Unknown error: " + response.statusText);
    }
  }
  return response.text();
}