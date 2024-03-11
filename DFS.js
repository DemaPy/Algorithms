const dfs = (tree, start) => {
  const stack = [start];

  while (stack.length > 0) {
    const vert = stack.shift(); // Выбираем первую вершину из стека

    if (tree[vert]) {
      stack.unshift(...tree[vert]); // Добавляем вершины в начало стека
    }
  }
};
