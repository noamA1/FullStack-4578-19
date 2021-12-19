export class Perfume {
  constructor(
    private name: string,
    private company: string,
    private amount: string,
    private forMenOrWomen: boolean,
    private price: number
  ) {}

  displayPerfumDetails(perfumesArray: Perfume[]): void {
    const perfumesTableBodyElement: Element = document.querySelector(
      ".perfumes-table-body"
    );
    let tableDataStr: string = "";
    for (let i = 0; i < perfumesArray.length; i++) {
      tableDataStr += `<tr>
                    <td>${i + 1}</td>
                    <td>${perfumesArray[i].name}</td>
                    <td>${perfumesArray[i].company}</td>
                    <td>${perfumesArray[i].amount}</td>
                    <td>${perfumesArray[i].forMenOrWomen ? "women" : "Men"}</td>
                    <td>${perfumesArray[i].price}&#36;</td>
                    <td id = "perfume-vat-${i}"><a type ="button" id="perfume-button-${i}" class = "perfume-vat-button">get perfume vat</a></td>
                </tr>`;
    }
    perfumesTableBodyElement.innerHTML = tableDataStr;
  }
  getPerfumeVat(price: number) {
    return price * 0.17;
  }
}
