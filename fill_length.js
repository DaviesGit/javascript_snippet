function fill_length(str,length){
    str+='';
    while(str.length<length){
        str='0'+str;
    }
    return str;
}