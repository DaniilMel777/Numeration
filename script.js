let arr = [], arr1 = [], arr2 = [];
// Ввод данных с проверкой на отрицательность
function input(q, ar, number){
    q = +prompt(`Введите ${number} число: `)
    while (q<0){
        q = +prompt(`Введите ${number} число: `)
        if (q<0){
            alert("Введите корректные данные")
        }
    }
    ar.push(q)
}
function inputInfo(){
    let b, c;
        alert("Это программа для прямой и обратной нумерации пар неотрицательных чисел, введите пожалуйста пары НЕотрицательных чисел");
        while (true){
            input(b, arr, "первое")
            input(c, arr1, "второе")
            end = prompt('Желаете продлжить да/нет?')
            if (end=="нет"){
                break
            } else if (end=="да") {
                continue
            } else {
                end = prompt('Желаете продлжить да/нет?')
            }
        }
}
// Прямая нумерация пар чисел и запись их в массив
function numeration(){
    let leng = arr.length
    let num = ""
    let k = 1
    arr2 = [];
    for (let i = 0; i < leng; i++, k++){
        arr2[i] =  `${k}`+ ". (" + arr[i] + ", " + arr1[i] + ")\n"
    }
    num = arr2.join("\n"); 
    alert(num);
}
// Обратная нумерация пар чисел, вывод пары по номеру]
function numerationRev(){
    index = +prompt("Введите номер пары: ")
    alert(arr2[index-1])
}
// Получаем элемент кнопки по её ID
const button = document.getElementById('myButton');
const button2 = document.getElementById('myButton2');
const button3 = document.getElementById('myButton3');
// Добавляем обработчик события 'click' на кнопку
button.addEventListener('click', inputInfo);
button2.addEventListener('click', numeration);
button3.addEventListener('click', numerationRev);