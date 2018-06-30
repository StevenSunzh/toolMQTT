const parser = {
    singleLevel: "+",
    allLevel: "#",
    trimEnd: function (str) { if ((str.indexOf("/") > 0) && (str.indexOf(str) == str.length - 1)) return str.slice(0, str.indexOf("/")); else return str },
    extLevels: function (str) {
        return {
            lowestLevel: str.slice(0, (str.indexOf("/") < 0) ? str.length : str.indexOf("/")),
            contLevel: str.slice(((str.indexOf("/")) < 0) ? str.length : str.indexOf("/") + 1)
        }
    },
    isEqualLevel: function (str1, str2) {
        if (str1 == this.singleLevel || str2 == this.singleLevel) return true
        else if (str1 == str2) return true
        else return false
    },
    isParent: function (str1, str2) {
        _str1 = this.trimEnd(str1); _str2 = this.trimEnd(str2)
        if (_str1 == _str2) { return true }
        while (true) {
            _obj1 = this.extLevels(_str1); _obj2 = this.extLevels(_str2)
            _str1 = _obj1.contLevel; _str2 = _obj2.contLevel
            if ((_obj1.lowestLevel == this.allLevel || _obj2.lowestLevel == this.allLevel) || (_obj1.lowestLevel == "" && _obj2.lowestLevel == "")) return true
            else if (this.isEqualLevel(_obj1.lowestLevel, _obj2.lowestLevel)) continue
            else return false
        }
    },
}
