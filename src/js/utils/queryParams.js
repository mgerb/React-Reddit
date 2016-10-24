export default class queryParams{
 
    constructor(){
        this.params = [];
        this.queryParams = [];
    }
    
    pushParam(value){
        if(typeof value !== 'undefined'){
            this.params.push(value);
        }
    }
    
    pushQueryParam(key, value){
        if (typeof value !== 'undefined') this.queryParams.push({key, value});
    }
    
    toString(){
        let p = '/', qp = '?';
        
        this.params.forEach((param, index) => {
            p += param + '/';
        });
        
        p !== '/' ? p = p.slice(0, p.length - 1) : null;
        
        this.queryParams.forEach((map) => {
            console.log(map.key);
            qp += `${map.key}=${map.value}&`;
        });
        
        qp === '?' ? qp = '' : qp = qp.slice(0, qp.length - 1);
        
        return p + '.json' + qp;
    }
}