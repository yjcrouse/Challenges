function check_Palindrome(str_entry){
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/i,'');
        var ccount = 0;
    
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {

            if (cstr.length === 1) {
                console.log("This word is a palindrome.");
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) { 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("This word is not a palindrome.");
                return false;
            }
        }
        console.log("This word is a palindrome");
        return true;
    }
    check_Palindrome('redrumsirismurder');
    