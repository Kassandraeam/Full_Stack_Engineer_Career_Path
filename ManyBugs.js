const date = new Date();
const pst = date.toLocaleString('en-US', {
timeZone: 'America/Los_Angeles',
timeStyle: 'short',
});

class Bug {
    constructor(weaponDevName, weaponName, ATVIID, CL, CSS, console, tester, shipTestDev){

        this._weaponDevName = weaponDevName;
        this._weaponName = weaponName;
        this._ATVIID = ATVIID;
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
    get ATVIID(){
        return this._ATVIID;
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

When the User selects and equips the ${this.weaponName}, and views the Unlock Criteria for the Diamond and Atomic camo, they will observe that the tracking bar is inconsistent with the written goal text.

*Steps to Reproduce:*

# Launch WZ.
# Select a Private Match.
# Edit Loadout.
# Equip the ${this.weaponName} and then select Gunsmith.
# Click the Customize tab, and then the Camouflage option.
# Select {redacted}.
# Observe that the tracking bar is inconsistent with the written goal text.

*Results:*

Observe that the tracking bar is inconsistent with the written goal text.

*Notes:*

* Profile: ${this.ATVIID}
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
* Profile: ${this.ATVIID}
`)};
}    
class PC extends Bug{
    constructor(weaponDevName, weaponName, ATVIID, tester, shipTestDev){
        super(weaponDevName, weaponName, ATVIID, 'Build Name', 'CSS number', 'PC', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}
class playstation extends Bug{
    constructor(weaponDevName, weaponName, ATVIID, tester,shipTestDev){
        super(weaponDevName, weaponName, ATVIID, 'Build Name', 'CSS number', 'PS4', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}
class xbox extends Bug{
    constructor(weaponDevName, weaponName, ATVIID, tester,shipTestDev){
        super(weaponDevName, weaponName, ATVIID, 'Build Name', 'CSS number', 'XBOX', tester, shipTestDev); 
        return this.description(), this.cc();
    }
}

class commentCC extends Bug{
    constructor(ATVIID, CL, CSS, tester, shipTestDev){
        super(ATVIID, CL, CSS, tester, shipTestDev); 
        return this.cc();
    }
}

// PC USERS HERE: remove the two back slashes before const.
const PCs = new PC('Weapon dev name', 'Weapon name', 'qamseawolf15#9626484', 'KEam', 'Ship');

// SONY USERS HERE: remove the two back slashes before const.
//const Sony = new playstation('Weapon dev name', 'Weapon name', 'Qam_bowfin_1343', 'PRobertson', 'Ship');

// MICROSOFT USERS HERE: remove the two back slashes before const.
//const Xbox = new xbox('Weapon Dev Name', 'Weapon Name', 'ATVI ID', 'TEST CC Abbreviation', 'Ship, Dev, or Test');

// const Console = new PC/playstation/xbox('Weapon Dev Name', 'Weapon Name', 'ATVI ID', 'TEST CC Abbreviation', 'Ship, Dev, or Test')
