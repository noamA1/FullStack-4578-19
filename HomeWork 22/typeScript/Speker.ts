export class Speker {
  constructor(public color: string, public volume: number) {}

  public turnOn() {
    this.showAlert("The speker turn on");
  }

  public turnOff() {
    this.showAlert("The speker turn off");
  }

  public sound() {
    this.showAlert(`The speker is playing... 🎶🎶`);
  }

  public displayData() {
    const infoElement = document.querySelector(".speker-data");
    infoElement.innerHTML = `<p> Speker Color: ${this.color}</p><p> Speker Volume: ${this.volume}</p>`;
    infoElement.removeAttribute("hidden");
  }

  private showAlert(message: string) {
    const alertElement = document.querySelector(".speker-alert");
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");
    setTimeout(() => {
      alertElement.setAttribute("hidden", "true");
    }, 2000);
  }
}
