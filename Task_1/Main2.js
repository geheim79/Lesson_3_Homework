
// Задача 1: Валидатор математических выражений 
// Создайте функцию safeCalculate(expression), которая принимает строку с 
// математическим выражением и безопасно его вычисляет. Функция должна: 
// ● Перехватывать синтаксические ошибки 
// ● Возвращать объект { success: boolean, result?: number, error?: 
// string } 
// ● Обрабатывать деление на ноль как отдельную ошибку javascript 
// // Примеры: 
// safeCalculate("2 + 2") // { success: true, result: 4 } 
// safeCalculate("10 / 0") // { success: false, error: "Division by zero" } 
// safeCalculate("2 + + 2") // { success: false, error: "Invalid expression" } 


function safeCalculate(expression) {

   try {
    let result = eval(expression);  // 1. получаем результат
    // console.log("result:", result);
    // 2. проверяем результат
    if (result === Infinity) {
        // console.log("Throw сработал");
        throw new Error("Division by zero");
    } // Создаётся объект ошибки:
    // {name: "Error",
    //  message: "Division by zero"}

    return {
        success: true,
        result: result
    };
}
catch (error) {
    // console.log("error:", error);
    //   console.log("message:", error.message);
     if (error.message === "Division by zero") {
        return {
            success: false,
            error: "Division by zero"
        };
    }
    return {
        success: false,
        error: "Invalid expression"
    };
}
}

// function safeCalculate(expression) {

//    try {

//       let result = eval(expression);

//       console.log("result:", result);

//       if (result === Infinity) {
//          console.log("Throw сработал");

//          throw new Error("Division by zero");
//       }

//       return {
//          success: true,
//          result: result
//       };

//    } catch(error) {

//       console.log("error:", error);
//       console.log("message:", error.message);

//       if (error.message === "Division by zero") {
//          return {
//             success: false,
//             error: "Division by zero"
//          };
//       }

//       return {
//          success: false,
//          error: "Invalid expression"
//       };
//    }
// }
