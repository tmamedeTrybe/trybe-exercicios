const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

  const flatten = (array) => array.reduce((result, item) => {
      return `${result} ${item}`

  })
  

  console.log(flatten(arrays));