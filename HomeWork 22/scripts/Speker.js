export class Speker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    turnOn() {
        this.showAlert("The speker turn on");
    }
    turnOff() {
        this.showAlert("The speker turn off");
    }
    sound() {
        this.showAlert(`The speker is playing... 🎶🎶`);
    }
    displayData() {
        const infoElement = document.querySelector(".speker-data");
        infoElement.innerHTML = `<p> Speker Color: ${this.color}</p><p> Speker Volume: ${this.volume}</p>`;
        infoElement.removeAttribute("hidden");
    }
    showAlert(message) {
        const alertElement = document.querySelector(".speker-alert");
        alertElement.innerHTML = message;
        alertElement.removeAttribute("hidden");
        setTimeout(() => {
            alertElement.setAttribute("hidden", "true");
        }, 2000);
    }
}
