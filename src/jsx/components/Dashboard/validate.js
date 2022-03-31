const whiteList = require('./attr_whitelist').default.default;


const validate = {

    NUM: (value) => /[^0-9\\;]/g.test(value),
    BOOL: (value) => typeof (value) == 'boolean' && value === true ? false : true,
    ARR: (value) => typeof (value) == 'object' && value instanceof Array ? true : false,
    STR: (value) => typeof (value) == 'string' && value.trim().length > 0 ? false : true,
    OBJ: (value) => typeof (value) == 'object' && value !== null ? true : false,
    ID: (value) => {
        var notNumber = /[^0-9\\;]/g.test(value);    //   /[^0-9\\,\\.\\;]/g     =  122,00.00  === false
        if (notNumber) {      return '';
        } else {
            value = validate.REMOVE_SPECIAL(value);
            let IntValue = parseInt(value);
            if (IntValue === 0) {return IntValue;
            } else {  let err = !isNaN(IntValue) ? (IntValue.toString().length > 150 ? true : validate.NUM(IntValue)) : true;
               return err ? '' : IntValue;
            }
        }
    },
    CLEAN: (value) => {
        value = value.toString(); value = value.trim()
        return validate.REMOVE_SPECIAL(value);
    },
    REMOVE_SPECIAL: (value) => value.replace(/[^a-zA-Z0-9 ]/g, ""),
    XSS: (value) => xss(value, whiteList.list),
    EMAIL: (value) => !RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value),
    PASSWORD: (value) => !RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(value), 
    FLOAT: (value) => !RegExp(/^(\d+\.?\d{0,9}|\.\d{1,9})$/).test(value),
    URL: (value) => {
        var removedSpecial = validate.REMOVE_SPECIAL(value);
        return removedSpecial.replace(/[^A-Z0-9]+/ig, "-");
    },
}

export default validate;