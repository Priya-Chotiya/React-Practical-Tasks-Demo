const data = {
  name: "root",
  isFolder: true,
  list: [
    {
      name: "Public",
      isFolder: true,
      list: [
        {
          name: "Public Nested 1",
          isFolder: true,
          list: [
            {
              name: "Index.html",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      list: [
        {
          name: "Accordian",
          isFolder: true,
          list: [
            {
              name: "Accordian.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "Debounce",
          isFolder: true,
          list: [
            {
              name: "Debounce.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "Package.json",
      isFolder: false,
    },
    {
      name: "Package-Lock.json",
      isFolder: false,
    },
  ],
};
export default data;
