export const getStudentsProfileById = async () => {
  const response = await fetch(
    "http://localhost:4001/auth/students",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};