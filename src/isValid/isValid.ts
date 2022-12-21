function isValidBrackets(str:string){
    let bracket1Total=0;
    let bracket2Total=0;
    let bracket3Total=0;
    for(let word of str){
        switch(word){
            case '(':{
                bracket1Total++
                break;
            }
            case ')':{
                bracket1Total--
                break;
            }
            case '[':{
                bracket2Total++
                break;
            }
            case ']':{
                bracket2Total--
                break;
            }
            case '{':{
                bracket3Total++
                break;
            }
            case '}':{
                bracket3Total--
                break;
            }
        }
    }
    return !Boolean(bracket1Total || bracket2Total || bracket3Total)
}
export {}
