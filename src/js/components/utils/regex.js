//next step part imgur links and find absolute jpg link
export function getImageLink(string){
        console.log(string);
        const temp = string.match(/\.(jpg|png|gif)\b/);
        
        return temp !== null ? string : null;
}