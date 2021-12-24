export class Flashlight {
  constructor(
    public color: string,
    public length: number,
    public lightPower: number,
    public numberOfBatteries: number
  ) {}

  public turnOn() {
    this.showAlert("The flashlight turn on");
  }

  public turnOff() {
    this.showAlert("The flashlight turn off");
  }

  public replaceBatteries() {
    this.showAlert("The flashlight batteries were replaced");
  }
  public displayData() {
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

  private showAlert(message: string) {
    const alertElement = document.querySelector(".flashlight-alert");
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");
    setTimeout(() => {
      alertElement.setAttribute("hidden", "true");
    }, 2000);
  }
}
