# Задача 1: Валидатор математических выражений

## Создайте функцию safeCalculate(expression), которая принимает строку с 
математическим выражением и безопасно его вычисляет. Функция должна: 
● Перехватывать синтаксические ошибки 
● Возвращать объект { success: boolean, result?: number, error?: 
string } 
● Обрабатывать деление на ноль как отдельную ошибку 
javascript 
// Примеры: 
safeCalculate("2 + 2") // { success: true, result: 4 } 
safeCalculate("10 / 0") // { success: false, error: "Division by zero" } 
safeCalculate("2 + + 2") // { success: false, error: "Invalid expression" } 