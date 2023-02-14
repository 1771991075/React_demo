let bus = {
    list:[],
    //发布
    emit(name,msg){
        let index = this.list.findIndex(item=>item.name===name)
        if(index !== -1){
            this.list[index].callBack(msg)
        }
    },
    //订阅
    on(name,callBack){
        this.list.push({name,callBack})
    }
}

export default bus;