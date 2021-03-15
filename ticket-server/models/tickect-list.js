const Ticket = require('./ticket')
class TicketList {
    constructor() {
        this.latestNumber = 0;
        this.slopes = [];
        this.assignes = [];
    }

    get nextNumber(){
        this.latestNumber ++;
        return this.latestNumber;
    }

    // 3 in cards ticket y 10 in history
    get latest_13(){
        return this.assignes.slice(0,3)
    }

    createTicket(){
        const newTicket = new Ticket(this.nextNumber);
        this.slopes.push(newTicket)
        return newTicket
    }

    assignTicket(agent, desktop){

        if(this.slopes.length <= 0){
                return null
            }
                  const nextTicket = this.slopes.shift();
                  nextTicket.agent = agent;
                  nextTicket.desktop = desktop;

            this.assignes.unshift(nextTicket);
            return nextTicket
    }


}

module.exports = TicketList;
