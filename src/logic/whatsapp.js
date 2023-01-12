export const getTime = () => {
    return new Date()
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .toLocaleLowerCase();
  };