class Person {
    firstName;
    lastName;
    middleName;
    fullNamePiecesl

    constructor(data = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
        this.fullNamePieces = [data.firstName, data.middleName, data.lastName];
        
    }
    get fullName() {
        if (this.middleName.length > 0) {
            return `${this.firstName} ${this.middleName[0]} ${this.lastName}`;
        }

        return `${this.firstName} ${this.lastName}`;
    }

    sayMyName() {
        window.alert(this.fullName);
    }

    getCodeName() {
        const isATestingGod = confirm('Are you a testing god?');

        if (isATestingGod) {
            return 'TESTING GOD!'
        } else {
            return `Scrub skipping tests in his best friend's ride!`;
        }
    }
}