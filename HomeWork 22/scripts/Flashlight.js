export class Flashlight {
    constructor(color, length, lightPower, numberOfBatteries) {
        this.color = color;
        this.length = length;
        this.lightPower = lightPower;
        this.numberOfBatteries = numberOfBatteries;
    }
    turnOn() {
        this.showAlert("The flashlight turn on");
    }
    turnOff() {
        this.showAlert("The flashlight turn off");
    }
    replaceBatteries() {
        this.showAlert("The flashlight batteries were replaced");
    }
    displayData() {
        const infoElement = document.querySelector(".flashlight-data");
        infoElement.innerHTML = `
    Flashlight Data:
    <ul>
        <li>Color: ${this.color}</li>
        <li>Length: ${this.length} cm</li>
        <li>Light power: ${this.lightPower} </li>
        <li>Number of batteries: ${this.numberOfBatteries}</li>
    </ul>`;
        infoElement.removeAttribute("hidden");
    }
    showAlert(message) {
        const alertElement = document.querySelector(".flashlight-alert");
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden");
        setTimeout(() => {
            alertElement.setAttribute("hidden", "true");
        }, 2000);
    }
}
