const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function(){
        let hungry = '';
        let tired = '';
        let inTheMood = '';
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
            console.log(`[${this.name}]: умер :(`);
        }
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
        let k = 0;
        if (k >= 5){
            this.meal++;
            k = 0;
        }
        if (this.meal < 5){
            this.meal++;
            this.mood--;
            k++;
        }
    },
    Sleep: function(){
        if (this.energy < 5){
            this.energy++;
            this.meal--;
        }
    },
    Play: function(){
        if (this.mood < 5){
            this.mood++;
            this.energy--;
        }
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