{
  // block starts
  /* Basic promise */

  // Simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling the promise function
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log(data);
    return data;
  };
  showData();

  // Working with server data

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    return data;
  };

  getTodo();
  // block ends
}
