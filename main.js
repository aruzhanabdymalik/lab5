function load (){
  let column_1 = [5, 1, 9, 1, 9, 8, 6, 3, 4, 2, 3, 10, 7, 8, 5, 1, 5, 10, 1, 1, 6, 1, 9, 9, 5, 1, 2, 6, 6]; 
  let column_2 = [2, 6, 8, 3, 2, 7, 9, 9, 3, 5, 5, 5, 4, 5, 4, 4, 6, 3, 5, 3, 6, 3, 5, 9, 4, 9, 1, 6, 6]; 
  let column_3 = [79, 44, 73, 100, 63, 43, 98, 68, 44, 90, 48, 93, 93, 53, 53, 63, 52, 95, 92, 40, 56, 68, 62, 93, 51, 77, 65, 67, 73]; 
  let column_4 = [98, 43, 82, 70, 76, 94, 63, 49, 67, 95, 73, 50, 94, 46, 44, 85, 98, 85, 96, 83, 55, 94, 61, 58, 41, 56, 92, 51, 46]; 

  let sum_1 = 0; 

  for (let i = 0; i < column_1.length; i++) {
    sum_1 += column_1[i]; 
  }

  let sum_2 = 0; 

  for (let i = 0; i < column_2.length; i++) {
    sum_2 += column_2[i]; 
  }

  let sum_3 = 0; 

  for (let i = 0; i < column_3.length; i++) {
    sum_3 += column_3[i]; 
  }

  let sum_4 = 0; 

  for (let i = 0; i < column_4.length; i++) {
    sum_4 += column_4[i]; 
  }

  let sums = [sum_1, sum_2, sum_3, sum_4]
  let total_score = sum_1 + sum_2 + sum_3 + sum_4

  console.log ("Total Score=" + total_score)
  const results = {
    column_1: column_1,
    column_2: column_2,
    column_3: column_3,
    column_4: column_4,
    sums: sums,
    total_score: total_score
  }
  console.log (results)
}

