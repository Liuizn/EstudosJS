//Create Calculator :

function createCalculator(params) {
    return {

        //Atributes here
        display : document.querySelector(`.display`),

        //Methods here
        start : function(){
            this.buttonsClick()
        },


        //Verify all the Clicks and take specific decision on each
        buttonsClick : function () 
        {
            addEventListener(`click`, function(e) 
            {
                const buttonClicked = e.target

                //ON Numbers and Operators, insert value to display
                if(buttonClicked.classList.contains(`btn-num`))
                {
                    this.buttonToDisplay(buttonClicked.textContent)
                }

                //ON Equals, making the calculate
                if(buttonClicked.id == `equal`)
                {
                    this.calculate(this.display.value)
                }

                //ON Clear button, Clear Display
                if(buttonClicked.id == `btn-clear`)
                {   
                    this.display.value = ``
                }

                //ON delete, clear last value insert
                if(buttonClicked.id == `delete`)
                {
                    this.display.value = this.display.value.slice(0,-1)
                }

            }.bind(this))
        },

        //making the calculate
        calculate : function(expression) 
        {
            this.display.value = eval(expression)
        },

        //insert value to display
        buttonToDisplay: function(buttonValue)
        {
            this.display.value += buttonValue
        }

    }

}

const calculator = createCalculator()
calculator.start()