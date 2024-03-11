      const arr = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 2000)
      );

      function quickSort(arr) {
        if (arr.length < 2) return arr;

        const pivotIndex = Math.floor(arr.length / 2);
        const pivot = arr[pivotIndex];
        const less = [];
        const greater = [];

        for (let index = 0; index < arr.length; index++) {
          if (index === pivotIndex) continue;
          const curr = arr[index];
          if (curr >= pivot) {
            greater.push(curr);
          } else {
            less.push(curr);
          }
        }

        return [...quickSort(less), pivot, ...quickSort(greater)];
      }

      const result = quickSort(arr);
