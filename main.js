const menu = {
    tako: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    pizza: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 2850
        },
        {
            name: '🥤',
            time: 500
        },
    ],
}

function order(menuName, callback) {
    console.log('Start cooking...');
    
    
    const result = [];
        function cooking({ name, time }, numb) {
            
            callback(result[numb] = name);
            setTimeout(() => {

        }, time);
    };

    menuName.forEach(cooking); 
    console.log(result)
};

const callback = () => {
}
order(menu.tako, callback)