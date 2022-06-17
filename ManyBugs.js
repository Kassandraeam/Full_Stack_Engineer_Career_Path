const date = new Date();
const pst = date.toLocaleString('en-US', {
timeZone: 'America/Los_Angeles',
timeStyle: 'short',
});

class Bug {
    constructor(weaponDevName, weaponName, redacted, CL, CSS, console, tester, shipTestDev){

        this._weaponDevName = weaponDevName;
        this._weaponName = weaponName;
        this._redacted = redacted;
        this._CL = CL;
        this._CSS = CSS;
        this._console = console;
        this._tester = tester;
        this._shipTestDev = shipTestDev;
    }
    get weaponDevName(){
        return this._weaponDevName;
    }
    get weaponName(){
        return this._weaponName;
    }
    get redacted(){
        return this._redacted;
    }
    get CL(){
        return this._CL;
    }
    get CSS(){
        return this._CSS;
    }
    get console(){
        return this._console;
    }
    get tester(){
        return this._tester;
    }
    get shipTestDev(){
        return this._shipTestDev;
    }
    description(){
    console.log(`
SUMMARY: 

{redacted} – ${this.console} – {redacted} – Weapons – ${this.weaponDevName} – The ${this.weaponName} tracking bar for the {redacted} and {redacted} is inconsistent with the {redacted} text.

DESCRIPTION: 

When the User selects and equips the ${this.weaponName}, and views the {redacted} for the {redacted} and {redacted}, they will observe that the {redacted} is inconsistent with the written goal text.

*Steps to Reproduce:*

# Launch {redacted}.
# Select a {redacted}.
# Edit Loadout.
# Equip the ${this.weaponName} and then select {redacted}.
# Click the {redacted}, and then the {redacted} option.
# Select {redacted}.
# Observe that the {redacted} is inconsistent with the {redacted} text.

*Results:*

Observe that the {redacted} is inconsistent with the {redacted} text.

*Notes:*

* Profile: ${this.redacted}
* Time Stamp: ${pst + ' PST'}
* Online/LAN: Online
* CL: ${this.CL}
* CSS: ${this.CSS}
* Reproduction Rate: 5/5
`)
}    
    cc(){
console.log(`
CONSOLE CC'S:

${this.console} - Verified Open on CL# ${this.CL} by ${this.tester}
* Regressed on ${this.shipTestDev}
* ${this.CSS}
* Repro: 5/5
* Profile: ${this.redacted}
`)};
}    
class PC extends Bug{
    constructor(weaponDevName, weaponName, redacted, tester, shipTestDev){
        super(weaponDevName, weaponName, redacted, 'Build Name', 'CSS number', 'PC', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}
class playstation extends Bug{
    constructor(weaponDevName, weaponName, redacted, tester,shipTestDev){
        super(weaponDevName, weaponName, redacted, 'Build Name', 'CSS number', 'PS4', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}
class xbox extends Bug{
    constructor(weaponDevName, weaponName, redacted, tester,shipTestDev){
        super(weaponDevName, weaponName, redacted, 'Build Name', 'CSS number', 'XBOX', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}

class commentCC extends Bug{
    constructor(redacted, CL, CSS, tester, shipTestDev){
        super(redacted, CL, CSS, tester, shipTestDev); 
        return this.cc();
    }
}

// PC USERS HERE: remove the two back slashes before const.
const PCs = new PC('Weapon dev name', 'Weapon name', 'UserID', 'KEam', 'Ship');

// SONY USERS HERE: remove the two back slashes before const.
//const Sony = new playstation('Weapon dev name', 'Weapon name', 'UserID', 'UserName', 'Ship');

// MICROSOFT USERS HERE: remove the two back slashes before const.
//const Xbox = new xbox('Weapon Dev Name', 'Weapon Name', 'UserID', 'TEST CC Abbreviation', 'Ship, Dev, or Test');

// const Console = new PC/playstation/xbox('Weapon Dev Name', 'Weapon Name', 'UserID', 'TEST CC Abbreviation', 'Ship, Dev, or Test')
