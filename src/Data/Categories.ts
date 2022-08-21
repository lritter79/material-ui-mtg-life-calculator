import CategoryInterface from "../Interfaces/CategoryInterface"

const categories:CategoryInterface[] = [
    {id: 0, name:'EDH', startingLife: 40, maxCommanderDamage:21, isCommander:true},
    {id: 1, name:'Pauper EDH', startingLife: 30, maxCommanderDamage:16, isCommander:true},
    {id: 2, name:'60 Card', startingLife: 20, maxCommanderDamage:null, isCommander:false},
    {id: 3, name:'Two-Headed Giant', startingLife: 40, maxCommanderDamage:null, isCommander:false}
]

export default categories