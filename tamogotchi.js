const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    isDead: false,
    //inteligence: 1,
    getStatus: function(){
        let hungry = '';
        let tired = '';
        let inTheMood = '';
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
            this.isDead = true;
            console.log(`[${this.name}]: умер :(`);
        }
        /*else if(this.inteligence <= 0){
            console.log('ваш персонаж слишком тупой');
        }*/
        else{
            if (this.meal < 3){ hungry = 'Я голоден'; }
            else{  hungry = 'Я не голоден'; }
            if (this.energy < 3) { tired = 'Я хочу спать' }
            else { tired = 'Я не хочу спать' }
            if (this.mood < 3) { inTheMood = 'Мне скучно'; }
            else { inTheMood = 'Мне весело' }
            console.log(`Имя: ${this.name}, Еда: ${hungry} (${this.meal}), Энергия: ${tired} (${this.energy}), Настроение: ${inTheMood} (${this.mood})`);
        }
    },
    setName: function(name){
        this.name = name;
    },
    Eat: function(){
        if (this.isDead){
            console.log('вы мертвы, вызовите метод "reset" стобы начать занаво')
        }
        else if (this.meal < 5){
            this.meal++;
            this.mood--;
        }
        else{
            console.log('Вы Сыты');
        }
    },
    Sleep: function(){
        if (this.isDead){
            console.log('вы мертвы, вызовите метод "reset" стобы начать занаво')
        }
        else if (this.energy < 5){
            this.energy++;
            this.meal--;
        }
        else{
            console.log('Вы поспали');
        }
    },
    Play: function(){
        if (this.isDead){
            console.log('вы мертвы, вызовите метод "reset" стобы начать занаво')
        }
        else if (this.mood < 5){
            this.mood++;
            this.energy--;
        }
        else{
            console.log('Вы уже поиграли');
        }
    },
    reset: function(){
        this.meal = 1;
        this.energy = 2;
        this.mood = 4;
        console.log('Игра перезапущена')
    }
  }

tamogotchi.setName('Tom');

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Play();

tamogotchi.getStatus();

tamogotchi.Sleep();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Play();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Sleep();

tamogotchi.getStatus();

tamogotchi.Play();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.Eat();

tamogotchi.getStatus();

tamogotchi.reset();

tamogotchi.Eat();

tamogotchi.getStatus();