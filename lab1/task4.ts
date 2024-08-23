function calculatePriceIceCream(size:string, fillings:string[]=["шоколад"], marshmallow?:boolean):number{
    let totalPrice:number= 0;
    switch(size){
        case 'Маленький стаканчик':
            totalPrice = 10;
            break;
        case 'Великий стаканчик':
            totalPrice = 25;
            break;
        default:
            console.log('Неправильний варіант, помилка');
            return 0;
    }

    const fillingPrice: {[key:string]:number}={
        шоколад:5,
        карамель:6,
        ягоди: 10
    };

    fillings.forEach(filling => {
        if (fillingPrice[filling.toLowerCase()] !== undefined) {
            totalPrice += fillingPrice[filling.toLowerCase()];
        } else {
            console.log(`Неправильний наповнювач: ${filling}`);
        }
    });

    const marshmallowPrice = marshmallow ? 5 : 0;
    totalPrice += marshmallowPrice;

    return totalPrice;
}

//console.log(calculatePriceIceCream("Маленький стаканчик", ["шоколад", "ягоди"], true));

const sizeInput = prompt("Введіть розмір стаканчика (Маленький стаканчик або Великий стаканчик):");
const fillingsInput = prompt("Введіть наповнювачі через кому (шоколад, карамель, ягоди):");
const marshmallowInput = prompt("Додати маршмеллоу? Якщо так, введіть 'True'!");

const fillingsArray = fillingsInput && fillingsInput.trim() !== "" 
  ? fillingsInput.split(',').map(item => item.trim()) 
  : undefined;

const price = calculatePriceIceCream(
  sizeInput || "", 
  fillingsArray, 
  marshmallowInput?.toLowerCase() === 'true'
);

console.log(`Загальна ціна: ${price}`);