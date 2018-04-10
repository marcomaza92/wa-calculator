// #include <iostream>
// #include <cmath>

// double number, number1, number2;
// float a, b, c, x1, x2;

double addition(double number1, double number2) {
  return number1 + number2;
}
double subtraction(double number1, double number2) {
  return number1 - number2;
}
double multiplication(double number1, double number2) {
  return number1 * number2;
}
double division(double number1, double number2) {
  if (number2 != 0) {
    return number1 / number2;
  } else {
    return 34404;
  }
}
// double square(double number) {
//   return sqrt(number);
// }
// double exponentiation(double number1, double number2) {
//   if (number1 > 0 && number2 > 0) {
//     return pow(number1, number2);
//   } else {
//     return 34404;
//   }
// }
// double quadratic(float a, float b, float c) {
//   if (a != 0) {
//     x1 = (-b + sqrt(b*b - 4*a*c)/(2*a));
//     x2 = (-b - sqrt(b*b - 4*a*c)/(2*a));
//     return x1 x2;
//   } else {
//     return 34404;
//   }
// }
